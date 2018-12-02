import { Component, OnInit } from '@angular/core';
import { Question } from './question';

@Component({
    selector: 'app-exam-register',
    templateUrl: './exam-register.component.html',
    styleUrls: ['./exam-register.component.scss']
})
export class ExamRegisterComponent implements OnInit {
    questions: Question[];

    ngOnInit() {
        this.questions = [];
    }

    deleteQuestion(num: number) {
        var temporal = [];
        this.questions.forEach( (item, index) => {
            if(index != num) temporal.push(item);
        });
        this.questions = temporal;
    }

    createQuestion() {
        var question = new Question();
        this.questions.push(question);
    }

    register() {
        console.log(this.questions);
    }
}