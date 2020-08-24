import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { AssignmentRegistrationService, GroupDto, ParticipantDto } from "../../../../api";
import { BehaviorSubject } from "rxjs";
import { DialogService } from "../../shared/services/dialog.service";
import { SnackbarService } from "../../shared/services/snackbar.service";
import { ActivatedRoute } from "@angular/router";
import { getRouteParam } from "../../../../utils/helper";
import { SelectedAssignmentFacade } from "../../assessment/services/selected-assignment.facade";
import { UnsubscribeOnDestroy } from "../../shared/components/unsubscribe-on-destroy.component";
import { MatDialog } from "@angular/material/dialog";
import { SearchParticipantDialog } from "../../shared/components/dialogs/search-participant/search-participant.dialog";
import { MatTableDataSource } from "@angular/material/table";
import { ParticipantFacade } from "../../course/services/participant.facade";

@Component({
	selector: "app-registered-groups",
	templateUrl: "./registered-groups.component.html",
	styleUrls: ["./registered-groups.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisteredGroupsComponent extends UnsubscribeOnDestroy implements OnInit {

	dataSource$ = new BehaviorSubject(new MatTableDataSource<GroupDto>([]));
	
	courseId: string;
	assignmentId: string;

	displayedColumns = ["action", "name", "members"];

	constructor(public participantFacade: ParticipantFacade,
				private registrations: AssignmentRegistrationService,
				private selectedAssignment: SelectedAssignmentFacade,
				private route: ActivatedRoute,
				private dialogService: DialogService,
				private dialog: MatDialog,
				private snackbar: SnackbarService) { super(); }

	ngOnInit(): void {
		this.courseId = getRouteParam("courseId", this.route);
		this.assignmentId = getRouteParam("assignmentId", this.route);

		this.loadRegistrations();
	}

	/**
	 * Loads all registered groups for this assignment and emits them via `groups$`.
	 */
	private loadRegistrations(): void {
		this.subs.sink = this.registrations.getRegisteredGroups(this.courseId, this.assignmentId).subscribe({
			next: (result) => {
				this.dataSource$.next(new MatTableDataSource(result));
			},
			error: (error) => {
				this.snackbar.openApiExceptionMessage(error);
			}
		});
	}

	/**
	 * Registers all groups and their members for this assignment.
	 * Existing registrations should be removed beforehand.
	 */
	registerCurrentGroups(): void {
		this.dialogService.openConfirmDialog({
			title: "Action.Custom.RegisterAllGroups"
		}).subscribe(
			confirmed => {
				if (confirmed) {
					this.registrations.registerAllGroups(this.courseId, this.assignmentId).subscribe({
						next: () => {
							this.snackbar.openSuccessMessage();
							this.loadRegistrations();
						},
						error: (error) => {
							this.snackbar.openApiExceptionMessage(error);
						}
					});
				}
			}
		);
	}


	/**
	 * Unregisters all groups from this assignment.
	 */
	unregisterAllGroups(): void {
		this.dialogService.openConfirmDialog({
			title: "Action.Custom.UnregisterAllGroups"
		}).subscribe(
			confirmed => {
				if (confirmed) {
					this.registrations.unregisterAll(this.courseId, this.assignmentId).subscribe({
						next: () => {
							this.snackbar.openSuccessMessage();
							this.loadRegistrations();
						},
						error: (error) => {
							this.snackbar.openApiExceptionMessage(error);
						}
					});
				}
			}
		);
	}

	/**
	 * Registers the participant as a member of the given group.
	 */
	registerParticipant(group: GroupDto): void {
		this.dialog.open<SearchParticipantDialog, any, ParticipantDto[]>(SearchParticipantDialog, { data: this.courseId })
			.afterClosed().subscribe(
				participants => {
					if (participants?.length > 0) {
						console.log("Adding:", participants[0]);
						this.registrations.registerParticipantAsGroupMember(this.courseId, this.assignmentId, group.id, participants[0].userId)
							.subscribe({
								next: () => {
									this.snackbar.openSuccessMessage();
									this.loadRegistrations();
								},
								error: (error) => {
									this.snackbar.openApiExceptionMessage(error);
								}
							});
					}
				}
			);
	}

	/**
	 * Unregisters the participant from this assignment and thereby removes him from his group.
	 */
	unregisterParticipant(participant: ParticipantDto): void {
		this.dialogService.openConfirmDialog({
			title: "Action.Custom.RemoveParticipant",
			params: [participant.username]
		}).subscribe(
			confirmed => {
				if (confirmed) {
					this.registrations.unregisterUser(this.courseId, this.assignmentId, participant.userId).subscribe({
						next: () => {
							this.snackbar.openSuccessMessage();
							this.loadRegistrations();
						},
						error: (error) => {
							this.snackbar.openApiExceptionMessage(error);
						}
					});
				}
			}
		);
	}

	/**
	 * Unregisters the group and its members from the assignment.
	 */
	unregisterGroup(group: GroupDto): void {
		this.dialogService.openConfirmDialog({
			title: "Action.Custom.RemoveGroup",
			params: [group.name]
		}).subscribe(
			confirmed => {
				if (confirmed) {
					this.registrations.unregisterGroup(this.courseId, this.assignmentId, group.id).subscribe({
						next: () => {
							this.snackbar.openSuccessMessage();
							this.loadRegistrations();
						},
						error: (error) => {
							this.snackbar.openApiExceptionMessage(error);
						}
					});
				}
			}
		);
	}

}