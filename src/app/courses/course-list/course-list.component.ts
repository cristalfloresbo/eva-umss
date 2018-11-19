import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses = [1, 2, 3, 4, 5, 6];
  
  constructor() { }

  ngOnInit() {
  }

}
