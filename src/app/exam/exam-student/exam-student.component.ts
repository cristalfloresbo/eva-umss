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

    exam = [];
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
                this.exam = data.json();
                for (let item of this.exam) {
                    this.resultExam.push({ idQuestion: item.question.questionId, idAnswer: '' });
                }

            }
        );
    }

    registerExam() {
        console.log(this.resultExam);
        this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span>Se envio correctamente su examen</b>.', '', {
            timeOut: 8000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-info alert-with-icon",
            positionClass: 'toast-' + 'top' + '-' + 'right'
        });
    }

    onChange(index: number, idAnswer: any) {
        if (idAnswer != 'Seleccione...') {
            this.resultExam[index].idAnswer = +idAnswer;
        } else {
            this.resultExam[index].idAnswer = '';
        }
    }
}