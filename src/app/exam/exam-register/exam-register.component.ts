import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExamsService } from 'app/services/exams.service';
import { NgbDatepickerConfig, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

@Component({
    selector: 'app-exam-register',
    templateUrl: './exam-register.component.html',
    styleUrls: ['./exam-register.component.scss']
})
export class ExamRegisterComponent implements OnInit {

    value = { title: '', date: '', timeStart: '', timeEnd: '', description: '', questions: [] };
    date = { year: '', month: '', day: '' };
    timeStart = { hour: '', minute: '' };
    timeEnd = { hour: '', minute: '' };
    idCourse;
    questions: Question[];

    constructor(configDatepicker: NgbDatepickerConfig, calendar: NgbCalendar,
        private route: ActivatedRoute, private examsService: ExamsService, private toastr: ToastrService) {
        configDatepicker.minDate = { year: calendar.getToday().year, month: calendar.getToday().month, day: calendar.getToday().day };
        configDatepicker.maxDate = { year: 2099, month: 12, day: 31 };
        configDatepicker.outsideDays = 'hidden';
        configDatepicker.markDisabled = (date: NgbDate) => calendar.getNext(date).month <= calendar.getToday().month
                                                    && calendar.getNext(date).day <= calendar.getToday().day
                                                    && calendar.getNext(date).year <= calendar.getToday().year;
    }

    ngOnInit() {
        this.questions = [];
        this.route.params.subscribe(
            params => {
              this.idCourse = +params['id'];
            }
          )
    }

    deleteQuestion(num: number) {
        var temporal = [];
        this.questions.forEach((item, index) => {
            if (index != num) temporal.push(item);
        });
        this.questions = temporal;
    }

    createQuestion() {
        var question = new Question();
        this.questions.push(question);
    }

    register() {
        this.value.questions = this.questions;
        this.value.date = this.date.year + '-' + this.date.month + '-' + this.date.day;
        this.value.timeStart = this.timeStart.hour + ':' + this.timeStart.minute + ':00';
        this.value.timeEnd = this.timeEnd.hour + ':' + this.timeEnd.minute + ':00';
        console.log(this.value);
        this.examsService.postExam(this.value, this.idCourse).subscribe(
            res => this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> Exam creado correctamente</b>.', '', {
              timeOut: 8000,
              closeButton: true,
              enableHtml: true,
              toastClass: "alert alert-info alert-with-icon",
              positionClass: 'toast-' + 'top' + '-' + 'right'
            }),
            err => this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> Exam no creado</b>.', '', {
              timeOut: 8000,
              closeButton: true,
              enableHtml: true,
              toastClass: "alert alert-warning alert-with-icon",
              positionClass: 'toast-' + 'top' + '-' + 'right'
            }));
    }
}