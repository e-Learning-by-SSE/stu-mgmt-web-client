import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { CourseParticipantsApi } from "@student-mgmt/api-client";
import { createParticipant } from "../../domain/participant.model";
import { AuthSelectors } from "../auth";
import { CourseActions, CourseSelectors } from "../course";
import { loadAdmissionsStatus } from "./admission-status/admission-status.actions";
import { loadAssessments } from "./assessments/assessments.actions";
import { loadGroups } from "./groups/groups.actions";
import * as ParticipantActions from "./participant.actions";

@Injectable()
export class ParticipantEffects {
	loadCourse$ = createEffect(() =>
		this.actions$.pipe(
			ofType(CourseActions.loadCourse),
			map(action => ParticipantActions.loadParticipant({ courseId: action.courseId }))
		)
	);

	LoadParticipant$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ParticipantActions.loadParticipant),
			withLatestFrom(this.store.select(AuthSelectors.selectUser)),
			switchMap(([action, user]) =>
				this.courseParticipants.getParticipant(action.courseId, user.id).pipe(
					map(participant =>
						ParticipantActions.loadParticipantSuccess({
							courseId: action.courseId,
							data: createParticipant(participant)
						})
					),
					catchError(error =>
						of(ParticipantActions.loadParticipantFailure({ error: error.error }))
					)
				)
			)
		)
	);

	loadParticipantSuccess$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ParticipantActions.loadParticipantSuccess),
			switchMap(action => {
				if (action.data.role === "STUDENT") {
					const props = { courseId: action.courseId };
					return [loadAssessments(props), loadGroups(props), loadAdmissionsStatus(props)];
				}

				return [];
			})
		)
	);

	constructor(
		private actions$: Actions,
		private store: Store,
		private courseParticipants: CourseParticipantsApi
	) {}
}
