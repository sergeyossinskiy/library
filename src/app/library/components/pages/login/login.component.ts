import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/library/services/access/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private auth: AuthService) { 
    if ( !this.auth.check() ){
      
      this.route.queryParams.subscribe(params => {
        this.auth.attempt(params);
      }); 

    }
  }

  ngOnInit(): void { }

  login(): void {    
    this.auth.login();    
  }

}
