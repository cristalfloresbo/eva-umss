import { Component, Input, OnInit } from '@angular/core';
import { Answer } from './answer';

@Component({
    selector: 'app-answer-format',
    templateUrl: './answer-format.component.html'
})
export class AnswerFormat implements OnInit{
    @Input() answer: Answer;
    @Input() index: number;
    ngOnInit() {
        console.log(this.answer);
    }
}