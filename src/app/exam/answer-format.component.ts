import { Component, Input } from '@angular/core';
import { Answer } from './answer';

@Component({
    selector: 'app-answer-format',
    templateUrl: './answer-format.component.html'
})
export class AnswerFormat {

    @Input() answer: Answer;
    @Input() index: number;

}