import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ExamsService } from 'app/services/exams.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-exam-student',
    templateUrl: './exam-student.component.html',
    styleUrls: ['./exam-student.component.scss']
})
export class ExamStudentComponent implements OnInit {

    exam = [];
    resultExam = { answers: [] };
    idExam;

    constructor(private activatedRoute: ActivatedRoute, private router: Router,
        private examsService: ExamsService,
        private toastr: ToastrService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            params => {
                this.idExam = +params['id'];
            }
        );
        this.examsService.getExamQuestions(this.idExam).subscribe(
            data => {
                this.exam = data.json();
                for (let item of this.exam) {
                    this.resultExam.answers.push({ questionId: item.question.questionId, answerId: -1 });
                }
            }
        )
    }

    registerExam() {
        this.removeQuestionWithAnswer();
        this.examsService.postStudentExam(this.resultExam, this.idExam).subscribe(
            res => {
                this.showMessage('Se envio correctamente su examen', 'alert alert-info alert-with-icon')
                this.router.navigate(['dashboard'])
            },
            err => {
                switch (err.status) {
                    case 409: { 
                        this.showMessage('Ya resolvi&oacute, no puede volver a enviar', 'alert alert-warning alert-with-icon')
                        break;
                    }
                    default: {
                        this.showMessage('No se pudo envio su examen', 'alert alert-warning alert-with-icon')
                        break;
                    }
                }
            }
        );
    }

    showMessage(message: string, toastClass: string) {
        this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span>' + message + '</b>.', '', {
            timeOut: 8000,
            closeButton: true,
            enableHtml: true,
            toastClass: toastClass,
            positionClass: 'toast-' + 'top' + '-' + 'right'
        })
    }

    onChange(index: number, answerId: any) {
        this.resultExam.answers[index].answerId = +answerId;
    }

    removeQuestionWithAnswer() {
        let result = [];
        result = this.resultExam.answers.filter(item => item.answerId != -1);
        this.resultExam.answers = result;
    }
}