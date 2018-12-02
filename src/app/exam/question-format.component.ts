import { Component, Input, OnInit } from '@angular/core';
import { Question } from './question';
import { Answer } from './answer';

@Component({
    selector: 'app-question-format',
    templateUrl: './question-format.component.html'
})
export class QuestionFormat implements OnInit{
    @Input() question:Question;
    @Input() index:number;

    ngOnInit() {
        console.log(this.question);
    }

    createAnswer() {
        var answer = new Answer();
        this.question.answers.push(answer);
    }

    deleteAnswer(num: number) {
        var temporal = [];
        this.question.answers.forEach( (item, index) => {
            if(index != num) temporal.push(item);
        });
        this.question.answers = temporal;
    }
}