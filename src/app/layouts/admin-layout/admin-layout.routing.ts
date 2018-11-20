import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { RegisterUserComponent } from '../../register-user/register-user.component';
import { TaskComponent } from '../../task/task.component';
import { CourseListComponent } from '../../courses/course-list/course-list.component';
import { CourseDescriptionComponent } from '../../courses/course-description/course-description.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'register-user', component: RegisterUserComponent },
    { path: 'task', component: TaskComponent },
    { path: 'course-list', component: CourseListComponent },
    { path: 'course-description/:id', component: CourseDescriptionComponent },
];
