import { Answer } from '../exam/answer';
export class Question {
    title: string;
    answers: Answer[];

    constructor() {
        this.title = '';
        this.answers = [];
    }
}