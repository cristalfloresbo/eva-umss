import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class ExamsService {

  route = "http://localhost:64277/api/";

  constructor(private http: Http) {
  }

  getStudentSolvedExamList(id: any) {
    return this.http.get(this.route + 'event/tests/' + id, this.getHeaders());
  }

  getExamSolved(studetId: any, testId: any) {
    return this.http.get(this.route + 'event/tests/' + testId + '/students/' + studetId, this.getHeaders());
  }

  getExams() {
    return this.http.get(this.route + 'tests', this.getHeaders());
  }

  getExamQuestions(id) {
    return this.http.get(this.route + 'tests/' + id + '/questions', this.getHeaders());
  }

  getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return new RequestOptions({ headers: headers });
  }

  postExam(exam: any, courseId: number) {
    return this.http.post(this.route + 'courses/' + courseId + '/tests', exam, this.getHeaders());
  }

  postStudentExam(resultExam: any, testId: number) {
    return this.http.post(this.route + 'event/tests/' + testId + '/deliver', resultExam, this.getHeaders());
  }
}
