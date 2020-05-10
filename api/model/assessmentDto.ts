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
import { GroupDto } from './groupDto';
import { PartialAssessmentDto } from './partialAssessmentDto';
import { UserDto } from './userDto';

export interface AssessmentDto { 
    /**
     * Unique identifier of this assessment.
     */
    id?: string;
    /**
     * Identifier of the assignment that is being evaluated by this assessment.
     */
    assignmentId: string;
    /**
     * The amount of points that the student or group achieved with their submission.
     */
    achievedPoints: number;
    /**
     * A comment providing additional feedback.
     */
    comment?: string;
    /**
     * If a group submission is being evaluated, contains the identifier of the group.
     */
    groupId?: string;
    /**
     * If a single user is being evaluated, contains the identifier of the user.
     */
    userId?: string;
    /**
     * Identifier of the creator of this assessment.
     */
    creatorId?: string;
    group?: GroupDto;
    creator?: UserDto;
    partialAssessments?: Array<PartialAssessmentDto>;
}