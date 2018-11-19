import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'app/services/courses.service';

@Component({
  selector: 'app-course-description',
  templateUrl: './course-description.component.html',
  styleUrls: ['./course-description.component.scss']
})
export class CourseDescriptionComponent implements OnInit {

  courseD = {
    title: "Entornos Virtuales de aprendizaje 2-2018",
    description: "La materia de entornos virtuales de aprendizaje esta orientada a aquellos alumnos que quieran profundizar sobra el tema",
    contents: [
      "Introduccion",
      "Desarrollo",
      "Proyectos",
      "Tareas",
      "Trabajo final dirigido"
    ]
  }

  course;
  id;

  constructor(
    private route: ActivatedRoute,
    private courseService: CoursesService) {
    this.course = {};
  }


  ngOnInit() {
    this.id = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
        this.getCourseDescription();
      }
    )
  }

  getCourseDescription() {
    this.courseService.getCourse(this.id).subscribe(
      response => {
        this.course = response.json();
        this.course.contents =  [
          "Introduccion",
          "Desarrollo",
          "Proyectos",
          "Tareas",
          "Trabajo final dirigido"
        ];
      }
    );
  }

}
