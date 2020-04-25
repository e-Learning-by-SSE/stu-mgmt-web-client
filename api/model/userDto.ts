/**
 * Student-Management-System-API
 * The Student-Management-Sytem-API. <a href='http://localhost:3000/api-json'>JSON</a>
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CourseDto } from './courseDto';

export interface UserDto { 
    /**
     * Unique identifier of this user.
     */
    id?: string;
    /**
     * Role within the application.
     */
    role: UserDto.RoleEnum;
    /**
     * If loaded within the context of a course: The role of the user in this course, i.e student.
     */
    courseRole?: UserDto.CourseRoleEnum;
    email: string;
    username: string;
    rzName: string;
    courses?: Array<CourseDto>;
}
export namespace UserDto {
    export type RoleEnum = 'SYSTEM_ADMIN' | 'ADMIN_TOOL' | 'MGTM_ADMIN' | 'USER';
    export const RoleEnum = {
        SYSTEMADMIN: 'SYSTEM_ADMIN' as RoleEnum,
        ADMINTOOL: 'ADMIN_TOOL' as RoleEnum,
        MGTMADMIN: 'MGTM_ADMIN' as RoleEnum,
        USER: 'USER' as RoleEnum
    };
    export type CourseRoleEnum = 'LECTURER' | 'TUTOR' | 'STUDENT';
    export const CourseRoleEnum = {
        LECTURER: 'LECTURER' as CourseRoleEnum,
        TUTOR: 'TUTOR' as CourseRoleEnum,
        STUDENT: 'STUDENT' as CourseRoleEnum
    };
}