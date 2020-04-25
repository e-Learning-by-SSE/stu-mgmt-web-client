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

import { AdmissionCriteriaDto } from '../model/admissionCriteriaDto';
import { AssignmentTemplateDto } from '../model/assignmentTemplateDto';
import { CourseConfigDto } from '../model/courseConfigDto';
import { CourseConfigUpdateDto } from '../model/courseConfigUpdateDto';
import { GroupSettingsDto } from '../model/groupSettingsDto';
import { GroupSettingsUpdateDto } from '../model/groupSettingsUpdateDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CourseConfigService {

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
     * Create admission criteria
     * Creates admission criteria for a course.
     * @param body 
     * @param courseId 
     * @param configId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createAdmissionCriteria(body: AdmissionCriteriaDto, courseId: string, configId: number, observe?: 'body', reportProgress?: boolean): Observable<AdmissionCriteriaDto>;
    public createAdmissionCriteria(body: AdmissionCriteriaDto, courseId: string, configId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AdmissionCriteriaDto>>;
    public createAdmissionCriteria(body: AdmissionCriteriaDto, courseId: string, configId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AdmissionCriteriaDto>>;
    public createAdmissionCriteria(body: AdmissionCriteriaDto, courseId: string, configId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createAdmissionCriteria.');
        }

        if (courseId === null || courseId === undefined) {
            throw new Error('Required parameter courseId was null or undefined when calling createAdmissionCriteria.');
        }

        if (configId === null || configId === undefined) {
            throw new Error('Required parameter configId was null or undefined when calling createAdmissionCriteria.');
        }

        let headers = this.defaultHeaders;

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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<AdmissionCriteriaDto>('post',`${this.basePath}/courses/${encodeURIComponent(String(courseId))}/config/${encodeURIComponent(String(configId))}/admission-criteria`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create assignment template
     * Creates an assignment template.
     * @param body 
     * @param courseId 
     * @param configId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createAssignmentTemplate(body: AssignmentTemplateDto, courseId: string, configId: number, observe?: 'body', reportProgress?: boolean): Observable<AssignmentTemplateDto>;
    public createAssignmentTemplate(body: AssignmentTemplateDto, courseId: string, configId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AssignmentTemplateDto>>;
    public createAssignmentTemplate(body: AssignmentTemplateDto, courseId: string, configId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AssignmentTemplateDto>>;
    public createAssignmentTemplate(body: AssignmentTemplateDto, courseId: string, configId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createAssignmentTemplate.');
        }

        if (courseId === null || courseId === undefined) {
            throw new Error('Required parameter courseId was null or undefined when calling createAssignmentTemplate.');
        }

        if (configId === null || configId === undefined) {
            throw new Error('Required parameter configId was null or undefined when calling createAssignmentTemplate.');
        }

        let headers = this.defaultHeaders;

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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<AssignmentTemplateDto>('post',`${this.basePath}/courses/${encodeURIComponent(String(courseId))}/config/${encodeURIComponent(String(configId))}/assignment-templates`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create course config
     * Saves a configuration for a course, if it does not have one already.
     * @param body 
     * @param courseId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createCourseConfig(body: CourseConfigDto, courseId: string, observe?: 'body', reportProgress?: boolean): Observable<CourseConfigDto>;
    public createCourseConfig(body: CourseConfigDto, courseId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CourseConfigDto>>;
    public createCourseConfig(body: CourseConfigDto, courseId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CourseConfigDto>>;
    public createCourseConfig(body: CourseConfigDto, courseId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createCourseConfig.');
        }

        if (courseId === null || courseId === undefined) {
            throw new Error('Required parameter courseId was null or undefined when calling createCourseConfig.');
        }

        let headers = this.defaultHeaders;

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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<CourseConfigDto>('post',`${this.basePath}/courses/${encodeURIComponent(String(courseId))}/config`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete assignment template
     * Deletes the assignment template.
     * @param courseId 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteAssignmentTemplate(courseId: string, id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteAssignmentTemplate(courseId: string, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteAssignmentTemplate(courseId: string, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteAssignmentTemplate(courseId: string, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (courseId === null || courseId === undefined) {
            throw new Error('Required parameter courseId was null or undefined when calling deleteAssignmentTemplate.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteAssignmentTemplate.');
        }

        let headers = this.defaultHeaders;

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

        return this.httpClient.request<any>('delete',`${this.basePath}/courses/${encodeURIComponent(String(courseId))}/config/assignment-template`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get admission criteria
     * Retrieves the admission criteria of a course.
     * @param courseId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAdmissionCriteria(courseId: string, observe?: 'body', reportProgress?: boolean): Observable<AdmissionCriteriaDto>;
    public getAdmissionCriteria(courseId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AdmissionCriteriaDto>>;
    public getAdmissionCriteria(courseId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AdmissionCriteriaDto>>;
    public getAdmissionCriteria(courseId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (courseId === null || courseId === undefined) {
            throw new Error('Required parameter courseId was null or undefined when calling getAdmissionCriteria.');
        }

        let headers = this.defaultHeaders;

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

        return this.httpClient.request<AdmissionCriteriaDto>('get',`${this.basePath}/courses/${encodeURIComponent(String(courseId))}/config/admission-criteria`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get assignment templates
     * Retrieves the assignment templates of a course.
     * @param courseId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAssignmentTemplates(courseId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<AssignmentTemplateDto>>;
    public getAssignmentTemplates(courseId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<AssignmentTemplateDto>>>;
    public getAssignmentTemplates(courseId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<AssignmentTemplateDto>>>;
    public getAssignmentTemplates(courseId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (courseId === null || courseId === undefined) {
            throw new Error('Required parameter courseId was null or undefined when calling getAssignmentTemplates.');
        }

        let headers = this.defaultHeaders;

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

        return this.httpClient.request<Array<AssignmentTemplateDto>>('get',`${this.basePath}/courses/${encodeURIComponent(String(courseId))}/config/assignment-templates`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get course config
     * Retrieves the configuration of a course.
     * @param courseId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCourseConfig(courseId: string, observe?: 'body', reportProgress?: boolean): Observable<CourseConfigDto>;
    public getCourseConfig(courseId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CourseConfigDto>>;
    public getCourseConfig(courseId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CourseConfigDto>>;
    public getCourseConfig(courseId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (courseId === null || courseId === undefined) {
            throw new Error('Required parameter courseId was null or undefined when calling getCourseConfig.');
        }

        let headers = this.defaultHeaders;

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

        return this.httpClient.request<CourseConfigDto>('get',`${this.basePath}/courses/${encodeURIComponent(String(courseId))}/config`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get group settings
     * Retrieves the group settings of a course.
     * @param courseId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getGroupSettings(courseId: string, observe?: 'body', reportProgress?: boolean): Observable<GroupSettingsDto>;
    public getGroupSettings(courseId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GroupSettingsDto>>;
    public getGroupSettings(courseId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GroupSettingsDto>>;
    public getGroupSettings(courseId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (courseId === null || courseId === undefined) {
            throw new Error('Required parameter courseId was null or undefined when calling getGroupSettings.');
        }

        let headers = this.defaultHeaders;

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

        return this.httpClient.request<GroupSettingsDto>('get',`${this.basePath}/courses/${encodeURIComponent(String(courseId))}/config/group-settings`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Remove admssion criteria
     * Removes the admission criteria of a course.
     * @param courseId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public removeAdmissionCriteria(courseId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public removeAdmissionCriteria(courseId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public removeAdmissionCriteria(courseId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public removeAdmissionCriteria(courseId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (courseId === null || courseId === undefined) {
            throw new Error('Required parameter courseId was null or undefined when calling removeAdmissionCriteria.');
        }

        let headers = this.defaultHeaders;

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

        return this.httpClient.request<any>('delete',`${this.basePath}/courses/${encodeURIComponent(String(courseId))}/config/admission-criteria`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Remove course config
     * Removes the complete configuration of a course. Includes group settings, admission criteria and templates.
     * @param courseId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public removeCourseConfig(courseId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public removeCourseConfig(courseId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public removeCourseConfig(courseId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public removeCourseConfig(courseId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (courseId === null || courseId === undefined) {
            throw new Error('Required parameter courseId was null or undefined when calling removeCourseConfig.');
        }

        let headers = this.defaultHeaders;

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

        return this.httpClient.request<any>('delete',`${this.basePath}/courses/${encodeURIComponent(String(courseId))}/config`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update admission criteria
     * Updates the admission criteria of a course.
     * @param body 
     * @param courseId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateAdmissionCriteria(body: AdmissionCriteriaDto, courseId: string, observe?: 'body', reportProgress?: boolean): Observable<AdmissionCriteriaDto>;
    public updateAdmissionCriteria(body: AdmissionCriteriaDto, courseId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AdmissionCriteriaDto>>;
    public updateAdmissionCriteria(body: AdmissionCriteriaDto, courseId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AdmissionCriteriaDto>>;
    public updateAdmissionCriteria(body: AdmissionCriteriaDto, courseId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateAdmissionCriteria.');
        }

        if (courseId === null || courseId === undefined) {
            throw new Error('Required parameter courseId was null or undefined when calling updateAdmissionCriteria.');
        }

        let headers = this.defaultHeaders;

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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<AdmissionCriteriaDto>('patch',`${this.basePath}/courses/${encodeURIComponent(String(courseId))}/config/admission-criteria`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update course config
     * Updates the configuration of a course.
     * @param body 
     * @param courseId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateCourseConfig(body: CourseConfigUpdateDto, courseId: string, observe?: 'body', reportProgress?: boolean): Observable<CourseConfigDto>;
    public updateCourseConfig(body: CourseConfigUpdateDto, courseId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CourseConfigDto>>;
    public updateCourseConfig(body: CourseConfigUpdateDto, courseId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CourseConfigDto>>;
    public updateCourseConfig(body: CourseConfigUpdateDto, courseId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateCourseConfig.');
        }

        if (courseId === null || courseId === undefined) {
            throw new Error('Required parameter courseId was null or undefined when calling updateCourseConfig.');
        }

        let headers = this.defaultHeaders;

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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<CourseConfigDto>('patch',`${this.basePath}/courses/${encodeURIComponent(String(courseId))}/config`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update group settings
     * Updates the group settings of a course.
     * @param body 
     * @param courseId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateGroupSettings(body: GroupSettingsUpdateDto, courseId: string, observe?: 'body', reportProgress?: boolean): Observable<GroupSettingsDto>;
    public updateGroupSettings(body: GroupSettingsUpdateDto, courseId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GroupSettingsDto>>;
    public updateGroupSettings(body: GroupSettingsUpdateDto, courseId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GroupSettingsDto>>;
    public updateGroupSettings(body: GroupSettingsUpdateDto, courseId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateGroupSettings.');
        }

        if (courseId === null || courseId === undefined) {
            throw new Error('Required parameter courseId was null or undefined when calling updateGroupSettings.');
        }

        let headers = this.defaultHeaders;

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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<GroupSettingsDto>('patch',`${this.basePath}/courses/${encodeURIComponent(String(courseId))}/config/group-settings`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
