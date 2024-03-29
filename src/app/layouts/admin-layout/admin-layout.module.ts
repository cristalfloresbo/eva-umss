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
import { CourseStudentsListComponent } from '../../courses/course-students-list/course-students-list.component';
import { CourseRegisterComponent } from '../../courses/course-register/course-register.component';
import { ExamRegisterComponent } from '../../exam/exam-register/exam-register.component';
import { QuestionFormat } from '../../exam/exam-register/question-format.component';
import { AnswerFormat } from '../../exam/exam-register/answer-format.component';
import { GradeComponent } from 'app/grade/grade.component';
import { ExamListComponent } from 'app/exam/exam-list/exam-list.component';
import { ExamStudentComponent } from 'app/exam/exam-student/exam-student.component';
import { ReviewTaskComponent } from 'app/task/review-task/review-task.component';
import { ViewExamSolvedComponent } from 'app/exam/view-exam-solved/view-exam-solved.component';
import { StudentSolvedExamListComponent } from 'app/exam/student-solved-exam-list/student-solved-exam-list.component';

import { CoursesService } from '../../services/courses.service';
import { TaskService } from '../../services/task.service';
import { GradeService } from '../../services/grade.service';
import { ExamsService } from 'app/services/exams.service';

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
    GradeComponent,
    NotificationsComponent,
    CourseListComponent,
    CourseStudentsListComponent,
    CourseDescriptionComponent,
    CourseRegisterComponent,
    ExamRegisterComponent,
    QuestionFormat,
    AnswerFormat,
    ExamListComponent,
    ExamStudentComponent,
    ReviewTaskComponent,
    StudentSolvedExamListComponent,
    ViewExamSolvedComponent,
  ],
  providers: [
    CoursesService,
    TaskService,
    GradeService,
    ExamsService,
  ]
})

export class AdminLayoutModule { }
