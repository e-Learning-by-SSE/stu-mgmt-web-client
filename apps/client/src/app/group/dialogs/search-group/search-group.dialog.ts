import { SelectionModel } from "@angular/cdk/collections";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { GroupDto, GroupApi } from "@student-mgmt/api-client";
import { SearchParticipantDialog } from "../../../shared/components/dialogs/search-participant/search-participant.dialog";
import { UnsubscribeOnDestroy } from "../../../shared/components/unsubscribe-on-destroy.component";
import { Paginator } from "../../../shared/paginator/paginator.component";

class GroupFilter {
	name: string;
}

@Component({
	selector: "app-search-group",
	templateUrl: "./search-group.dialog.html",
	styleUrls: ["./search-group.dialog.scss"]
	//changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchGroupDialog extends UnsubscribeOnDestroy implements OnInit {
	dataSource: MatTableDataSource<GroupDto>; //new BehaviorSubject(new ([]));
	displayedColumns = ["select", "name", "open"];
	selection = new SelectionModel<GroupDto>(false, []);

	filter = new GroupFilter();
	groupnameFilterChanged$ = new Subject<void>();

	@ViewChild(Paginator, { static: true }) paginator: Paginator;

	constructor(
		private dialogRef: MatDialogRef<SearchParticipantDialog>,
		@Inject(MAT_DIALOG_DATA) public readonly courseId: string,
		private groupApi: GroupApi
	) {
		super();
	}

	ngOnInit(): void {
		this.searchGroups();

		// Subscribe to changes of username filter: Trigger search 500ms after user stopped typing
		this.subs.sink = this.groupnameFilterChanged$
			.pipe(debounceTime(300))
			.subscribe(() => this.searchGroups());
	}

	/** Closes the dialog and returns `undefined`. */
	onCancel(): void {
		this.dialogRef.close();
	}

	/**Closes the dialog and returns the selected courses. */
	onConfirm(): void {
		this.dialogRef.close(this.selection.selected?.[0]);
	}

	searchGroups(triggeredByPaginator = false): void {
		const skip = triggeredByPaginator ? this.paginator.getSkip() : 0;
		const take = this.paginator.pageSize;

		this.subs.sink = this.groupApi
			.getGroupsOfCourse(
				this.courseId,
				skip,
				take,
				this.filter.name,
				undefined,
				undefined,
				undefined,
				"response"
			)
			.subscribe(response => {
				this.dataSource = new MatTableDataSource(response.body);
				this.paginator.setTotalCountFromHttp(response);
				if (!triggeredByPaginator) this.paginator.goToFirstPage();
			});
	}

	/** Selects the given row. Removes selection, if already selected. */
	select(row: GroupDto): void {
		if (this.selection.isSelected(row)) {
			this.selection.deselect(row);
		} else {
			this.selection.select(row);
		}
	}
}
