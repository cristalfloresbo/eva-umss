import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

  route = "http://localhost:64277/account/";

  constructor(private http: Http) { }

  login(userEmail, userPassword) {
    var user = {
      email: userEmail,
      password: userPassword
    }
    return this.http.post(this.route + "login", user);
  }

  register(userEmail, userPassword) {
    var user = {
      email: userEmail,
      password: userPassword
    }
    return this.http.post(this.route + "register", user);
  }

}
