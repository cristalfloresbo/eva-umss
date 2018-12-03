import { Course } from "app/courses/course";

export class Task {
    id?: number;
    title: string;
    comment: string;
    deliveryDate: Date;
    studentPresentation?: string;
    course: Course;
}
