import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { RegisterUserComponent } from '../../register-user/register-user.component'
import { TaskComponent } from '../../task/task.component';
import { DeliverTaskComponent } from '../../task/deliver-task/deliver-task.component';
import { CourseListComponent } from '../../courses/course-list/course-list.component';
import { CourseDescriptionComponent } from '../../courses/course-description/course-description.component';
import { CourseRegisterComponent } from '../../courses/course-register/course-register.component';

import { CoursesService } from '../../services/courses.service';
import { TaskService } from '../../services/task.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    RegisterUserComponent,
    TaskComponent,
    DeliverTaskComponent,
    NotificationsComponent,
    CourseListComponent,
    CourseDescriptionComponent,
    CourseRegisterComponent,
  ],
  providers: [
    CoursesService,
    TaskService
  ]
})

export class AdminLayoutModule { }
