import { Component, OnInit } from '@angular/core';
import { ExamsService } from 'app/services/exams.service';

@Component({
    selector: 'app-exam-list',
    templateUrl: './exam-list.component.html',
    styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent implements OnInit {

    exams: any[];
    isStudent = localStorage.getItem('user') == 'Estudiante'
    isTeacher = localStorage.getItem('user') == 'Docente'

    constructor(public examsService: ExamsService) { 
        this.exams = [];
    }

    ngOnInit() {
        this.examsService.getExams().subscribe(
            data => {
                this.exams = data.json();
            }
        );
    }
}