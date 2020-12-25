import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { config } from '../../config';
import { Observable } from 'rxjs';
import { HttpOptionsService } from './http-options.service';

@Injectable({
  providedIn: 'root'
})
export class SsoService {
  private sso_service: string;
  private sso_api: string;

  constructor(private http: HttpClient, private httpOption: HttpOptionsService) {
    this.sso_service = config('sso.service');
    this.sso_api = config('sso.api');
  }

  redirect(to: string, params: object): void{
    let href = this.sso_service + to + this.objectToGetParams(params);
    window.location.href = href;
  }

  objectToGetParams(params: object): string{
    let str: string = "";

    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        let iterator = Object.keys(params).indexOf(key);
        str += (iterator == 0 ? "?" : "&") + key + "=" + params[key];
      }
    }
    
    return str;
  }

  redirectToLogin(params?: object): void{
      this.redirect( "/login", params);
  }

  redirectToRegister(params?: object): void{
      this.redirect( "/register", params);
  }

  logout(token: string): void {
    let options = this.httpOption.extend('sso-access-token', token);
    
    this.http.get(this.sso_api + "/logout" , options ).subscribe({
      next: (value) => {
        console.log(value);
      }
    });
  }

}
