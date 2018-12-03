import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class CoursesService {

  route = "http://localhost:64277/api/course";

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
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return new RequestOptions({ headers: headers });
  }

  postCourse(course: any) {
    return this.http.post(this.route, course);
  }
}
