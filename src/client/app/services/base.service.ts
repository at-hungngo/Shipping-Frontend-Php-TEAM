import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Config } from '../shared/config/env.config';
/**
 * 
 * 
 * @export
 * @abstract
 * @class BaseService
 */
@Injectable()
export abstract class BaseService {

    private headers = new Headers({ 'Content-Type': 'application/json' });

    private url = Config.URL;  // URL to web api

    constructor(private http: Http) { }

    /**
     * 
     * 
     * @param {*} data 
     * 
     * @memberOf BaseService
     */
    setHeaders(data: any) {
        let key;
        for (key in data) {
            this.headers.append(key, data[key]);
        }
    }

    /**
     * 
     * 
     * @param {*} [filters] 
     * @returns {Promise<any>} 
     * 
     * @memberOf BaseService
     */
    get(filters?: any): Promise<any> {
        let url = this.url;
        let query = '';
        let key;
        if (filters) {
            for (key in filters) {
                query += query ==''?'':'&&';
                query += `${key}=${filters[key]}`;
            }
        }
        url += query == ''?'':query; 
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    /**
     * 
     * 
     * @param {number} id 
     * @returns {Promise<void>} 
     * 
     * @memberOf BaseService
     */
    delete(id: number): Promise<void> {
        let url = `${this.url}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    /**
     * 
     * 
     * @param {*} data 
     * @returns {Promise<any>} 
     * 
     * @memberOf BaseService
     */
    create(data: any): Promise<any> {
        return this.http
            .post(this.url, JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    /**
     * 
     * 
     * @param {*} data 
     * @param {number} id 
     * @returns {Promise<any>} 
     * 
     * @memberOf BaseService
     */
    update(data: any, id: number): Promise<any> {
        const url = `${this.url}/${id}`;
        return this.http
            .put(url, JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    /**
     * 
     * 
     * @private
     * @param {*} error 
     * @returns {Promise<any>} 
     * 
     * @memberOf BaseService
     */
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}