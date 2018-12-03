import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Grade } from 'app/grade/grade';

@Injectable()
export class GradeService {
    route = "http://localhost:64277/api/Grades";

    constructor(private http: Http) { }

    getGrades() {
        return this.http.get(this.route );
    }
}
