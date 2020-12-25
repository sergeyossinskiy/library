import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services';

@Component({
  selector: 'app-auth-buttons',
  templateUrl: './auth-buttons.component.html',
  styleUrls: ['./auth-buttons.component.scss']
})
export class AuthButtonsComponent implements OnInit {
  public authorized: boolean;

  constructor(public auth: AuthService) { 
    this.authorized = auth.check();
  }

  logout(): void{
    this.auth.logout();
    this.authorized = this.auth.check();
  }

  login(): void{
    this.auth.login();
  }

  register(): void{
    this.auth.register();
  }

  ngOnInit(): void {
  }

}
