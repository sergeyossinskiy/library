import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/User';
//import { HttpClient } from '@angular/common/http';
//import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(/*private http: HttpClient*/) { }

  getData(): Observable<User>{

    return;
  }
}
