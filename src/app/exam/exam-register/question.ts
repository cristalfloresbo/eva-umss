import { Answer } from './answer';
export class Question {
    value: string;
    answers: Answer[];

    constructor() {
        this.value = '';
        this.answers = [];
    }
}