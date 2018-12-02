import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CoursesService {

  route = "http://localhost:54721/api/course";

  constructor(private http: Http) { }

  getCourses() {
    return this.http.get(this.route);
  }

  getCourse(id) {
    return this.http.get(this.route + '/' + id);
  }

  postCourse(course: any) {
    this.http.post(this.route, course);
  }
}
