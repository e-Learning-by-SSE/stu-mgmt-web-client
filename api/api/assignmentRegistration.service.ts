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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { GroupDto } from '../model/groupDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class AssignmentRegistrationService {

    protected basePath = '/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Get registered group.
     * Retrieves all registered groups and their members for the specified assignment.
     * @param courseId 
     * @param assignmentId 
     * @param groupId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRegisteredGroup(courseId: string, assignmentId: string, groupId: string, observe?: 'body', reportProgress?: boolean): Observable<GroupDto>;
    public getRegisteredGroup(courseId: string, assignmentId: string, groupId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GroupDto>>;
    public getRegisteredGroup(courseId: string, assignmentId: string, groupId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GroupDto>>;
    public getRegisteredGroup(courseId: string, assignmentId: string, groupId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (courseId === null || courseId === undefined) {
            throw new Error('Required parameter courseId was null or undefined when calling getRegisteredGroup.');
        }

        if (assignmentId === null || assignmentId === undefined) {
            throw new Error('Required parameter assignmentId was null or undefined when calling getRegisteredGroup.');
        }

        if (groupId === null || groupId === undefined) {
            throw new Error('Required parameter groupId was null or undefined when calling getRegisteredGroup.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<GroupDto>('get',`${this.basePath}/courses/${encodeURIComponent(String(courseId))}/assignments/${encodeURIComponent(String(assignmentId))}/registrations/groups/${encodeURIComponent(String(groupId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get registered group of user.
     * Retrieves the group that the participant is registered with for the specified assignment.
     * @param courseId 
     * @param assignmentId 
     * @param userId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRegisteredGroupOfUser(courseId: string, assignmentId: string, userId: string, observe?: 'body', reportProgress?: boolean): Observable<GroupDto>;
    public getRegisteredGroupOfUser(courseId: string, assignmentId: string, userId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GroupDto>>;
    public getRegisteredGroupOfUser(courseId: string, assignmentId: string, userId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GroupDto>>;
    public getRegisteredGroupOfUser(courseId: string, assignmentId: string, userId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (courseId === null || courseId === undefined) {
            throw new Error('Required parameter courseId was null or undefined when calling getRegisteredGroupOfUser.');
        }

        if (assignmentId === null || assignmentId === undefined) {
            throw new Error('Required parameter assignmentId was null or undefined when calling getRegisteredGroupOfUser.');
        }

        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getRegisteredGroupOfUser.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<GroupDto>('get',`${this.basePath}/courses/${encodeURIComponent(String(courseId))}/assignments/${encodeURIComponent(String(assignmentId))}/registrations/users/${encodeURIComponent(String(userId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get registered groups.
     * Retrieves all registered groups and their members for the specified assignment.
     * @param courseId 
     * @param assignmentId 
     * @param skip [Pagination] The amount of elements that should be skipped.
     * @param take [Pagination] The amount of elements that should be included in the response.
     * @param groupname 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRegisteredGroups(courseId: string, assignmentId: string, skip?: number, take?: number, groupname?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<GroupDto>>;
    public getRegisteredGroups(courseId: string, assignmentId: string, skip?: number, take?: number, groupname?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GroupDto>>>;
    public getRegisteredGroups(courseId: string, assignmentId: string, skip?: number, take?: number, groupname?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GroupDto>>>;
    public getRegisteredGroups(courseId: string, assignmentId: string, skip?: number, take?: number, groupname?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (courseId === null || courseId === undefined) {
            throw new Error('Required parameter courseId was null or undefined when calling getRegisteredGroups.');
        }

        if (assignmentId === null || assignmentId === undefined) {
            throw new Error('Required parameter assignmentId was null or undefined when calling getRegisteredGroups.');
        }




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (skip !== undefined && skip !== null) {
            queryParameters = queryParameters.set('skip', <any>skip);
        }
        if (take !== undefined && take !== null) {
            queryParameters = queryParameters.set('take', <any>take);
        }
        if (groupname !== undefined && groupname !== null) {
            queryParameters = queryParameters.set('groupname', <any>groupname);
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<GroupDto>>('get',`${this.basePath}/courses/${encodeURIComponent(String(courseId))}/assignments/${encodeURIComponent(String(assignmentId))}/registrations/groups`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Registers all groups.
     * Registers all groups with their current members for the assignment. Should only be used for testing or when automatic registration fails.
     * @param courseId 
     * @param assignmentId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public registerAllGroups(courseId: string, assignmentId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public registerAllGroups(courseId: string, assignmentId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public registerAllGroups(courseId: string, assignmentId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public registerAllGroups(courseId: string, assignmentId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (courseId === null || courseId === undefined) {
            throw new Error('Required parameter courseId was null or undefined when calling registerAllGroups.');
        }

        if (assignmentId === null || assignmentId === undefined) {
            throw new Error('Required parameter assignmentId was null or undefined when calling registerAllGroups.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('post',`${this.basePath}/courses/${encodeURIComponent(String(courseId))}/assignments/${encodeURIComponent(String(assignmentId))}/registrations`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Register participant as group member.
     * Registers a participant as a member of the specified group for the assignment.
     * @param courseId 
     * @param assignmentId 
     * @param groupId 
     * @param userId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public registerParticipantAsGroupMember(courseId: string, assignmentId: string, groupId: string, userId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public registerParticipantAsGroupMember(courseId: string, assignmentId: string, groupId: string, userId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public registerParticipantAsGroupMember(courseId: string, assignmentId: string, groupId: string, userId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public registerParticipantAsGroupMember(courseId: string, assignmentId: string, groupId: string, userId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (courseId === null || courseId === undefined) {
            throw new Error('Required parameter courseId was null or undefined when calling registerParticipantAsGroupMember.');
        }

        if (assignmentId === null || assignmentId === undefined) {
            throw new Error('Required parameter assignmentId was null or undefined when calling registerParticipantAsGroupMember.');
        }

        if (groupId === null || groupId === undefined) {
            throw new Error('Required parameter groupId was null or undefined when calling registerParticipantAsGroupMember.');
        }

        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling registerParticipantAsGroupMember.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('post',`${this.basePath}/courses/${encodeURIComponent(String(courseId))}/assignments/${encodeURIComponent(String(assignmentId))}/registrations/groups/${encodeURIComponent(String(groupId))}/members/${encodeURIComponent(String(userId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Unregister all.
     * Removes all registrations for the specified assignment.
     * @param courseId 
     * @param assignmentId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public unregisterAll(courseId: string, assignmentId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public unregisterAll(courseId: string, assignmentId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public unregisterAll(courseId: string, assignmentId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public unregisterAll(courseId: string, assignmentId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (courseId === null || courseId === undefined) {
            throw new Error('Required parameter courseId was null or undefined when calling unregisterAll.');
        }

        if (assignmentId === null || assignmentId === undefined) {
            throw new Error('Required parameter assignmentId was null or undefined when calling unregisterAll.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/courses/${encodeURIComponent(String(courseId))}/assignments/${encodeURIComponent(String(assignmentId))}/registrations`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Unregister group.
     * Removes the registration of a group and its members for this assignment.
     * @param courseId 
     * @param assignmentId 
     * @param groupId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public unregisterGroup(courseId: string, assignmentId: string, groupId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public unregisterGroup(courseId: string, assignmentId: string, groupId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public unregisterGroup(courseId: string, assignmentId: string, groupId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public unregisterGroup(courseId: string, assignmentId: string, groupId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (courseId === null || courseId === undefined) {
            throw new Error('Required parameter courseId was null or undefined when calling unregisterGroup.');
        }

        if (assignmentId === null || assignmentId === undefined) {
            throw new Error('Required parameter assignmentId was null or undefined when calling unregisterGroup.');
        }

        if (groupId === null || groupId === undefined) {
            throw new Error('Required parameter groupId was null or undefined when calling unregisterGroup.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/courses/${encodeURIComponent(String(courseId))}/assignments/${encodeURIComponent(String(assignmentId))}/registrations/groups/${encodeURIComponent(String(groupId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Unregister user.
     * Removes the registration of a user for the specified assignment.
     * @param courseId 
     * @param assignmentId 
     * @param userId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public unregisterUser(courseId: string, assignmentId: string, userId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public unregisterUser(courseId: string, assignmentId: string, userId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public unregisterUser(courseId: string, assignmentId: string, userId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public unregisterUser(courseId: string, assignmentId: string, userId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (courseId === null || courseId === undefined) {
            throw new Error('Required parameter courseId was null or undefined when calling unregisterUser.');
        }

        if (assignmentId === null || assignmentId === undefined) {
            throw new Error('Required parameter assignmentId was null or undefined when calling unregisterUser.');
        }

        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling unregisterUser.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/courses/${encodeURIComponent(String(courseId))}/assignments/${encodeURIComponent(String(assignmentId))}/registrations/users/${encodeURIComponent(String(userId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}