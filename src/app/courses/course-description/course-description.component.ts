import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-description',
  templateUrl: './course-description.component.html',
  styleUrls: ['./course-description.component.scss']
})
export class CourseDescriptionComponent implements OnInit {

  course = {
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
  constructor() { }

  ngOnInit() {
  }

}
