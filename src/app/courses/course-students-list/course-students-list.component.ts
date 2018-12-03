import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'app/services/courses.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course-students-list',
  templateUrl: './course-students-list.component.html',
  styleUrls: ['./course-students-list.component.scss']
})
export class CourseStudentsListComponent implements OnInit {

  students = [
    {id:1, name: "Luis Galarza Coban", grade: 0},
    {id:2, name: "Maria Repa Morales", grade: 0},
    {id:3, name: "Jose Hurtado Montan", grade: 0},
  ];

  constructor(private courseService: CoursesService, private toastr: ToastrService) { }

  ngOnInit() {
    this.courseService.getStudentList().subscribe(
      data => {
        this.students = data.json();
        this.students.forEach(student => {
          student.grade = 0
        });
      }
    );
  }

  calificar(student){
    console.log(student);
    this.courseService.gradeStudent(student).subscribe(
      response => {
        this.showNotification();
      }
    );
  }

  showNotification(){
    this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span>Se ha registrado la nota</b>.', '', {
      timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon",
      positionClass: 'toast-' + 'top' + '-' + 'right'
    });
  }
}
