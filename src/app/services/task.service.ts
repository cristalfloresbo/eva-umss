import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Task } from 'app/task/task';

@Injectable()
export class TaskService {

  route = "http://localhost:64277/api/Tasks";
  routeEvent = "http://localhost:64277/api/event/tasks"

  constructor(private http: Http) { }

  getTasks() {
    return this.http.get(this.route);
  }

  getTask(id) {
    return this.http.get(this.route + '/' + id);
  }

  postTask(task: Task) {
      return this.http.post("http://localhost:64277/api/courses/" + task.course.id + "/tasks", task);
  }

  deliverTask(task: Task) {
    return this.http.put(this.routeEvent + '/' + task.id + '/deliver', task);
  }
}
