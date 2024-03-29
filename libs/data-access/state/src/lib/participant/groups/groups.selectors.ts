import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromParticipantGroups from "./groups.reducer";

export const selectParticipantGroupsState =
	createFeatureSelector<fromParticipantGroups.ParticipantGroupsState>(
		fromParticipantGroups.pGroupsFeatureKey
	);

export const selectGroupOfAssignment = (assignmentId: string) =>
	createSelector(selectParticipantGroupsState, state => {
		return state.data?.[assignmentId];
	});
