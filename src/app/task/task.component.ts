import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'app/services/task.service';
import { Task } from './task';
import { CoursesService } from 'app/services/courses.service';
import { Course } from 'app/courses/course';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  user;
  task;
  studentRole: boolean;
  taskList;
  courses;
  constructor(private route: ActivatedRoute, private service: TaskService,
    private courseService: CoursesService) {
    this.task = {}
    this.taskList = [];
    this.courses = [];
  }

  ngOnInit() {
    this.user = localStorage.getItem("user");
    console.log(this.user);
    this.getCourses();
    this.verifyRoleUser();
    this.getTasks();
  }

  saveTask() {
    this.task.courseId = localStorage.getItem('courseId');
    console.log(this.task);
    this.service.postTask(this.task).subscribe();
    this.getTasks();
  }

  verifyRoleUser() {
    this.studentRole = (this.user === 'Estudiante');
  }

  getTasks() {
    return this.service.getTasks().subscribe(
      data => {
        this.taskList = data.json();
      }
    );
  }
  getCourses() {
    this.courseService.getCourses().subscribe(
      data => {
        this.courses = data.json();
      }
    );
  }
}
