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

export interface StudentMgmtException { 
    name: StudentMgmtException.NameEnum;
}
export namespace StudentMgmtException {
    export type NameEnum = 'CourseClosedException' | 'NotACourseMemberException' | 'NotATeachingStaffMember' | 'GroupClosedException' | 'GroupsForbiddenException' | 'AlreadyInGroupException';
    export const NameEnum = {
        CourseClosedException: 'CourseClosedException' as NameEnum,
        NotACourseMemberException: 'NotACourseMemberException' as NameEnum,
        NotATeachingStaffMember: 'NotATeachingStaffMember' as NameEnum,
        GroupClosedException: 'GroupClosedException' as NameEnum,
        GroupsForbiddenException: 'GroupsForbiddenException' as NameEnum,
        AlreadyInGroupException: 'AlreadyInGroupException' as NameEnum
    };
}