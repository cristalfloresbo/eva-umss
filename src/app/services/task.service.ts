import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Task } from 'app/task/task';

@Injectable()
export class TaskService {

  route = "http://localhost:54721/api/task";

  constructor(private http: Http) { }

  getTasks() {
    return this.http.get(this.route);
  }

  getTask(id) {
    return this.http.get(this.route + '/' + id);
  }

  postTask(task: Task) {
      return this.http.post(this.route, task);
  }

  deliverTask(id: number) {
    return this.http.post(this.route, id);
  }
}
