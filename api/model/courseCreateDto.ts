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
import { CourseConfigDto } from './courseConfigDto';

export interface CourseCreateDto { 
    /**
     * Unique identifier of this course.
     */
    id?: string;
    /**
     * Shortname of this course, i.e \"java\". Should be reused every semester. Will be used in URLs.
     */
    shortname: string;
    /**
     * Semester that the iteration of this course belong to.
     */
    semester: string;
    /**
     * The full title of this course, i.e Programming I: Java
     */
    title: string;
    /**
     * Determines, wether changes (i.e joining this course) can be made to this course.
     */
    isClosed: boolean;
    /**
     * Additional link to another website.
     */
    link?: string;
    lecturers?: Array<string>;
    config?: CourseConfigDto;
}