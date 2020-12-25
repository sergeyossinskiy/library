import { HttpHeaders } from '@angular/common/http';
import { Injectable, Self } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpOptionsService {
  public headers: HttpHeaders;

  constructor() { 
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json', 
      'Accept': 'application/json'
    })
  }

  extend(param: string, value: string): object{
    this.headers = this.headers.set(param, value);
    return this;
  }
}
