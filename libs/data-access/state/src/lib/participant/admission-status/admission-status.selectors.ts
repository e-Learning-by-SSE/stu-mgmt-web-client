import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromParticipantAdmissionStatus from "./admission-status.reducer";

export const selectParticipantAdmissionStatusState =
	createFeatureSelector<fromParticipantAdmissionStatus.ParticipantAdmissionStatusState>(
		fromParticipantAdmissionStatus.pAdmissionStatusFeatureKey
	);
