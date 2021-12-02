import { createAction, props } from "@ngrx/store";
import { CourseDto, UserDto } from "@student-mgmt/api-client";

export const login = createAction(
	"[Login Dialog] Login",
	props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
	"[login$ Effect] Login Success",
	props<{ user: UserDto; accessToken: string }>()
);

export const loginFailure = createAction(
	"[login$ Effect] Login Failure",
	props<{ error: unknown }>()
);

export const logout = createAction("[Logout] Logout");

export const setCourses = createAction("[User] Set Courses", props<{ courses: CourseDto[] }>());
