import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'app/services/task.service';
import { Task } from '../task';

@Component({
  selector: 'app-deliver-task',
  templateUrl: './deliver-task.component.html'
})
export class DeliverTaskComponent implements OnInit {

  task;
  taskId: number ;
  constructor(private route: ActivatedRoute, private service: TaskService) {
    this.task = {}
    this.task.studentPresentation = '';
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.taskId = +params['id'];
        this.getTask();
      }
    )
  }

  getTask() {
    return this.service.getTask(this.taskId).subscribe(
      data => {
        this.task = data.json();
      }
    );
  }

  deliverTask() {
    this.service.deliverTask(this.task).subscribe( );
  }
}
