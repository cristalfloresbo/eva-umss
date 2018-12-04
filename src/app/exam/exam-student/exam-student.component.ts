import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ExamsService } from 'app/services/exams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-exam-student',
    templateUrl: './exam-student.component.html',
    styleUrls: ['./exam-student.component.scss']
})
export class ExamStudentComponent implements OnInit {

    exam = { title: '', description: ''};
    questions = [];
    resultExam = [];
    idExam;

    constructor(private route: ActivatedRoute,
        private examsService: ExamsService,
        private toastr: ToastrService) { }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.idExam = +params['id'];
            }
        );
        this.examsService.getExamQuestions(this.idExam).subscribe(
            data => {
                this.questions = data.json();
                for (let item of this.questions) {
                    this.resultExam.push({ idQuestion: item.questionId, idAnswer: '' });
                }

            }
        );
    }

    registerExam() {
        this.examsService.postExamStudent(this.resultExam, this.idExam);
        /*return this.examsService.postExamStudent(this.resultExam, this.idExam).subscribe(
            res => this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span>Se envio correctamente su examen</b>.', '', {
              timeOut: 8000,
              closeButton: true,
              enableHtml: true,
              toastClass: "alert alert-info alert-with-icon",
              positionClass: 'toast-' + 'top' + '-' + 'right'
            }),
            err => this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> No se pudo enviar correctamente su examen</b>.', '', {
              timeOut: 8000,
              closeButton: true,
              enableHtml: true,
              toastClass: "alert alert-warning alert-with-icon",
              positionClass: 'toast-' + 'top' + '-' + 'right'
            }));
            */
    }

    onChange(index: number, idAnswer: Number) {
        this.resultExam[index].idAnswer = +idAnswer;
    }
}