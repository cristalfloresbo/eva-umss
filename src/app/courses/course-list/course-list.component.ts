import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'app/services/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses;
  isStudent = localStorage.getItem('user') == 'Estudiante'
  isTeacher = localStorage.getItem('user') == 'Docente'
  
  constructor(private courseService: CoursesService) {
    this.courses = [];
  }

  ngOnInit() {
    this.courseService.getCourses().subscribe(
      data => {
        this.courses = data.json();
      }
    );
  }

}
