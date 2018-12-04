import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { RegisterUserComponent } from '../../register-user/register-user.component';
import { TaskComponent } from '../../task/task.component';
import { DeliverTaskComponent } from '../../task/deliver-task/deliver-task.component';
import { CourseListComponent } from '../../courses/course-list/course-list.component';
import { CourseDescriptionComponent } from '../../courses/course-description/course-description.component';
import { CourseStudentsListComponent } from '../../courses/course-students-list/course-students-list.component';

import { CourseRegisterComponent } from '../../courses/course-register/course-register.component';
import { ExamRegisterComponent } from '../../exam/exam-register.component';
import { GradeComponent } from 'app/grade/grade.component';
import { ExamListComponent } from 'app/exam/exam-list/exam-list.component';
import { ExamStudentComponent } from 'app/exam/exam-student/exam-student.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'register-user', component: RegisterUserComponent },
    { path: 'task', component: TaskComponent },
    { path: 'deliver-task/:id', component: DeliverTaskComponent },
    { path: 'course-list', component: CourseListComponent },
    { path: 'course-description/:id', component: CourseDescriptionComponent },
    { path: 'course-students', component: CourseStudentsListComponent },
    { path: 'course-register', component: CourseRegisterComponent },
    { path: 'register-exam/:id', component: ExamRegisterComponent },
    { path: 'grades', component: GradeComponent },
    { path: 'exam-list', component: ExamListComponent },
    { path: 'exam-student/:id', component: ExamStudentComponent },

];
