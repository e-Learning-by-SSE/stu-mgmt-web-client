import { createAction, props } from "@ngrx/store";
import { AssessmentDto } from "@student-mgmt/api-client";

export const loadAssessments = createAction(
	"[loadParticipantSuccess$] Load Assessments",
	props<{ courseId: string }>()
);

export const loadAssessmentsSuccess = createAction(
	"[loadAssessments$] Load Assessments Success",
	props<{ data: AssessmentDto[] }>()
);

export const loadAssessmentsFailure = createAction(
	"[loadAssessments$] Load Assessments Failure",
	props<{ error: any }>()
);
