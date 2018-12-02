import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-services.service';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = ""
  password = ""

  constructor(private authService: AuthService) { }

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
        console.log(tokenInfo); // show decoded token object in console
        localStorage.setItem('user', tokenInfo.role);
        localStorage.setItem('token', token);
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
