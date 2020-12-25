import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { RouteService, AuthService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {

  constructor(public route_service : RouteService, private auth: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if( this.auth.check() ){
        this.route_service.redirect('home');
        return of( false );
      }
      
      return of( true );
  }

  canActivateChild(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(route, state);
  }
  
}
