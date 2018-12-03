import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GradeService } from 'app/services/grade.service';
import { Course } from 'app/courses/course';

@Component({
    selector: 'app-grade',
    templateUrl: './grade.component.html',
    styleUrls: ['./grade.component.scss']
})

export class GradeComponent implements OnInit {
    gradeList;

    constructor(private service: GradeService) {
        this.gradeList = [];
    }

    ngOnInit(): void {
        this.getGrades();
    }

    getGrades() {
        return this.service.getGrades().subscribe(
            data => {
              this.gradeList = data.json();
            }
          );
    }
}
