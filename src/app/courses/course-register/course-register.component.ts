import { Component } from '@angular/core';
import { CoursesService } from 'app/services/courses.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course-register',
  templateUrl: './course-register.component.html',
  styleUrls: ['./course-register.component.scss']
})
export class CourseRegisterComponent {

  date: { year: '', month: '', day: '' };
  course = {
    name: "",
    description: "",
    startDate: ""
  }

  constructor(private coursesService: CoursesService, private toastr: ToastrService) { }

  register() {
    this.course.startDate = this.date.year + '-' + this.date.month + '-' + this.date.day;
    this.coursesService.postCourse(this.course).subscribe(
      res => this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> Curso registrado correctamente</b>.', '', {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-info alert-with-icon",
        positionClass: 'toast-' + 'top' + '-' + 'right'
      }),
      err => this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> Curso no Registrado</b>.', '', {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-warning alert-with-icon",
        positionClass: 'toast-' + 'top' + '-' + 'right'
      }));
  }
}