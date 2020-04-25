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

export interface GroupSettingsUpdateDto { 
    /**
     * Determines, wether course allows group creation.
     */
    allowGroups?: boolean;
    /**
     * If utilized, all group names will use the nameSchema followed by the group's number.
     */
    nameSchema?: string;
    /**
     * The required amount of members the group needs in order to submit group-assignments.
     */
    sizeMin?: number;
    /**
     * The maximum amount of members in a group.
     */
    sizeMax?: number;
    /**
     * Indicates, wether the group is managed by its members.
     */
    selfmanaged?: boolean;
}