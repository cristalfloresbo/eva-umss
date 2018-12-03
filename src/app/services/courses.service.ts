import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class CoursesService {

  route = "http://localhost:64277/api/courses";
  gradeRoute = "http://localhost:64277/api/grades";

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

  register(course) {
    let courseUser = {
      courseId: course.courseId,
      id: localStorage.getItem('userId'),
    }
    return this.http.post(this.route + '/students', courseUser, this.getHeaders());
  }

  getStudentList() {
    let id = localStorage.getItem("courseId");
    return this.http.get(this.route + '/' + id + '/students');
  }

  gradeStudent(student){
    let data = {
      student: {id: student.id},
      course: {courseId: localStorage.getItem("courseId")},
      value: student.grade
    }
    return this.http.post(this.gradeRoute, data, this.getHeaders());
  }

}
