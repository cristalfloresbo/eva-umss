import { Component, OnInit } from '@angular/core';
import { ExamsService } from 'app/services/exams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-view-exam-solved',
    templateUrl: './view-exam-solved.component.html',
    styleUrls: ['./view-exam-solved.component.scss']
})
export class ViewExamSolvedComponent implements OnInit {

    examSolved: any;

    constructor(private examsService: ExamsService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        let studetId = localStorage.getItem('studentId');
        let testId = 0;
        this.activatedRoute.params.subscribe(
            params => {
                testId = +params['id'];
            }
        );
        this.examsService.getExamSolved(studetId, testId).subscribe(
            data => this.examSolved = data.json().answers
        );
    }
}