import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchTopicsGrouped } from '../../models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../../config';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpOptionsService } from '../navigate/http-options.service';

@Injectable({
    providedIn: 'root'
})
export class SearchTopicsGroupedService {
    private api: string = config('api.service');

    constructor(private http: HttpClient, private httpOptions: HttpOptionsService) { }

    private handleError<T>(operation = 'operation', result?: T){
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        }
    }

    getAll(): Observable<any | SearchTopicsGrouped>{
        let options = this.httpOptions.extend('cacheable', "true");

        return this.http.get<SearchTopicsGrouped>(this.api + "/library/search_topics/grouped", options).pipe(
            catchError(this.handleError('getSearchTopics', []))
        );
    }
}