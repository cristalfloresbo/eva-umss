import { Component } from '@angular/core';
import { CoursesService } from 'app/services/courses.service';

@Component({
  selector: 'app-course-register',
  templateUrl: './course-register.component.html',
  styleUrls: ['./course-register.component.scss']
})
export class CourseRegisterComponent {

  course = {
    name: "",
    description: "",
    teacher: "",
    startDate: "",
    endDate: "",
  }

  constructor(private coursesService: CoursesService) { }

  register() {
    this.coursesService.postCourse(this.course);
  }
}