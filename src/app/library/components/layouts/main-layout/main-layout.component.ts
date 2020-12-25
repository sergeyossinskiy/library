import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/library/services/access/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  authorized: boolean;

  constructor(public auth: AuthService, private cookie: CookieService) {
    this.authorized = auth.check();
  }

  ngOnInit(): void {
  }

  logout(): void{
    this.auth.logout();
    this.authorized = this.auth.check();
  }

  login(): void{
    this.auth.login();
  }

  showCookie(): void{
    console.log( this.cookie.getAll() );
  }

}
