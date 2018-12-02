import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class CoursesService {

  route = "http://localhost:64277/api/courses";

  constructor(private http: Http) {
  }

  getCourses() {
    return this.http.get(this.route, this.getHeaders());
  }

  getCourse(id) {
    return this.http.get(this.route + '/' + id, this.getHeaders());
  }

  getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('authentication', 'Bearer' + localStorage.getItem('token'));
    return new RequestOptions({ headers: headers });
  }
}
