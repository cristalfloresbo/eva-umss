import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-services.service';
import * as jwt_decode from "jwt-decode";
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = ""
  password = ""

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  updateUser() {
    console.log(this.email);
    console.log(this.password);
    this.authService.login(this.email, this.password).subscribe(
      response => {
        let serverResponse = response.json();
        let token = serverResponse.token;
        let tokenInfo = this.getDecodedAccessToken(token);
        let user = tokenInfo.roles;
        console.log(tokenInfo); // show decoded token object in console
        localStorage.setItem('token', token);
        localStorage.setItem('user', user);
        localStorage.setItem('email', tokenInfo.sub);
        localStorage.setItem('userId', tokenInfo.id);
        switch(user) {
          case 'Admin': this.router.navigate(['/dashboard']); break;
          default: this.router.navigate(['/course-list']); break;
        }
        window.location.reload();
      }
    );
  }

  getDecodedAccessToken(token): any {
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      return null;
    }
  }

}
