import { createAction, props } from "@ngrx/store";
import { AssignmentDto } from "@student-mgmt/api-client";

export const loadAssignments = createAction(
	"[Assignment List] Load Assignments",
	props<{ courseId: string }>()
);

export const loadAssignmentsSuccess = createAction(
	"[loadAssignments$] Load Assignments Success",
	props<{ assignments: AssignmentDto[] }>()
);

export const loadAssignmentsFailure = createAction(
	"[loadAssignments$] Load Assignments Failure",
	props<{ error: any }>()
);

export const loadAssignmentById = createAction(
	"[Assignment] Load Assignment By Id",
	props<{ courseId: string; assignmentId: string }>()
);

export const loadAssignmentByIdSuccess = createAction(
	"[loadAssignmentById$] Load Assignment By Id Success",
	props<{ assignment: AssignmentDto }>()
);

export const loadAssignmentByIdFailure = createAction(
	"[loadAssignmentById$] Load Assignment By Id Failure",
	props<{ error: any }>()
);

// export const addAssignment = createAction(
// 	"[Assignment/API] Add Assignment",
// 	props<{ assignment: AssignmentDto }>()
// );

// export const upsertAssignment = createAction(
// 	"[Assignment/API] Upsert Assignment",
// 	props<{ assignment: AssignmentDto }>()
// );

// export const addAssignments = createAction(
// 	"[Assignment/API] Add Assignments",
// 	props<{ assignments: AssignmentDto[] }>()
// );

// export const upsertAssignments = createAction(
// 	"[Assignment/API] Upsert Assignments",
// 	props<{ assignments: AssignmentDto[] }>()
// );

// export const updateAssignment = createAction(
// 	"[Assignment/API] Update Assignment",
// 	props<{ assignment: Update<AssignmentDto> }>()
// );

// export const updateAssignments = createAction(
// 	"[Assignment/API] Update Assignments",
// 	props<{ assignments: Update<AssignmentDto>[] }>()
// );

// export const deleteAssignment = createAction(
// 	"[Assignment/API] Delete Assignment",
// 	props<{ id: string }>()
// );

// export const deleteAssignments = createAction(
// 	"[Assignment/API] Delete Assignments",
// 	props<{ ids: string[] }>()
// );

// export const clearAssignments = createAction("[Assignment/API] Clear Assignments");
