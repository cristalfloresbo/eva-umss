import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'app/services/task.service';
import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  task = new Task ();
  taskList;
  constructor(private route: ActivatedRoute, private service: TaskService) {
    this.taskList = [];
    this.task.title = '';
    this.task.deliveryDate = null;
    this.task.comment = '';
  }

  ngOnInit() {
    this.getTasks();
  }

  saveTask () {
    console.log(this.task);
    this.service.postTask(this.task).subscribe();
    this.getTasks();
  }

  getTasks() {
    return this.service.getTasks().subscribe(
      data => {
        this.taskList = data.json();
      }
    );

  }
}
