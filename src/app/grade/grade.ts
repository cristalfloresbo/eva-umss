import { Course } from "app/courses/course";

export class Grade {
    id?: number;
    student: any;
    course: Course;
    value: number;
    isApproved: boolean;
}
