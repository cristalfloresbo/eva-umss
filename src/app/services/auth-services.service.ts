import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

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

  register(userEmail, userPassword, rol, fName, lName) {
    var user = {
      email: userEmail,
      password: userPassword,
      role: rol,
      firstName: fName,
      lastName: lName
    }
    return this.http.post(this.route + "register", user, this.getHeaders());
  }

  getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return new RequestOptions({ headers: headers });
  }

}
