import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'app/services/task.service';
import { Task } from '../task';

@Component({
    selector: 'app-review-task',
    templateUrl: './review-task.component.html'
})
export class ReviewTaskComponent implements OnInit {

    taskList;
    studentId: number;
    constructor(private route: ActivatedRoute, private service: TaskService) {
        this.taskList = [{
            title: "uno",
            studentPresentation: "pevias"
        }, {
            title: "dos",
            studentPresentation: "estimao"
        }];
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.studentId = params['id'];
                this.getTasksByStudent(this.studentId);
            }
        )
    }

    getTasksByStudent(id: number) {
        return this.service.getTasksByStudent(id).subscribe(
            data => {
              this.taskList = data.json();
            }
          );
    }
}
