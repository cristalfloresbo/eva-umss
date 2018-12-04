import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Task } from 'app/task/task';

@Injectable()
export class TaskService {

  route = "http://localhost:64277/api/courses/";
  routeEvent = "http://localhost:64277/api/event/tasks"

  constructor(private http: Http) { }

  getTasks() {
    return this.http.get(this.route + localStorage.getItem('courseId')+'/tasks');
  }

  getTask(id) {
    return this.http.get(this.route + localStorage.getItem('courseId') + '/tasks/' + id);
  }

  postTask(task) {
      return this.http.post("http://localhost:64277/api/courses/" + task.courseId + "/tasks", task, this.getHeaders());
  }

  deliverTask(task: Task) {
    return this.http.put(this.route + localStorage.getItem('courseId')+'/tasks/' + task.id , task, this.getHeaders());
  }

  getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return new RequestOptions({ headers: headers });
  }
}
