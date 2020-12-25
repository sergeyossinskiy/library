import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SsoService } from '../navigate/sso.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject, Observable, of, PartialObserver, Subject } from 'rxjs';
import { UserService } from '../data/user.service';
import { RouteService } from '../navigate/route.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token$: Subject<string> = new Subject<string>();

  constructor(private cookie: CookieService, 
              private sso: SsoService, 
              private route: ActivatedRoute, 
              private router: Router, 
              private user: UserService,
              private route_service: RouteService) {
  }

  attempt(params: Params): void { 

    if (params['token'] != undefined){ 
      this.cookie.set('sso-access-token', params['token'] );
      
      this.route_service.redirect(
        this.route_service.get('pathname')
      );
    }    
  }

  check(): boolean{
    return this.cookie.check('sso-access-token');
  }

  logout(): void{
    
    if( this.cookie.check('sso-access-token') ){
      this.sso.logout( 
        this.cookie.get('sso-access-token')
      );

      this.cookie.delete('sso-access-token');
      if ( this.router.url != '/home'){
        this.route_service.redirect('home');
      }
    }   
  }

  login(): void{
    let params: object = this.defineParameters();
    this.sso.redirectToLogin( params );
  }

  register(): void{
    let params: object = this.defineParameters();
    this.sso.redirectToRegister( params );
  }

  defineParameters(): object{
    if ( this.router.url.includes('/login?') ){
      return this.route_service.gets();
    }   
    return this.route_service.activeRouteCompactToGET();
  }
}
