import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  calificar(id){
    console.log(this.students[id-1]);
  }
}
