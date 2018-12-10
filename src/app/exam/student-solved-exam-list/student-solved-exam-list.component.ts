import { Component, OnInit } from '@angular/core';
import { ExamsService } from 'app/services/exams.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-student-solved-exam-list',
    templateUrl: './student-solved-exam-list.component.html',
    styleUrls: ['./student-solved-exam-list.component.scss']
})
export class StudentSolvedExamListComponent implements OnInit {

    students: any[];

    constructor(private examService: ExamsService, private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        let testId = 0;
        this.activatedRoute.params.subscribe(
            params => {
                testId = +params['id'];
            }
        );
        this.examService.getStudentSolvedExamList(testId).subscribe(
            data => this.students = data.json()
        );
    }

    goExamSolved(studentId: any, testId: any) {
        localStorage.setItem('studentId', studentId);
        this.router.navigate(['view-exam-solved', testId]);
    }
}