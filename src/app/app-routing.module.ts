import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentCreateComponent } from './modules/students/Components/student-create/student-create.component';
import { StudentDetailsComponent } from './modules/students/Components/student-details/student-details.component';
import { StudentListComponent } from './modules/students/Components/student-list/student-list.component';
import { ShowClassComponent } from './modules/class/components/show-class/show-class.component';
import { ShowCoursesComponent } from './modules/courses/components/show-courses/show-courses.component';
import { DashboardMainComponent } from './modules/dashboard/components/dashboard-main/dashboard-main.component';
import { ShowFinanceComponent } from './modules/finance/components/show-finance/show-finance.component';
import { ShowManagmentComponent } from './modules/managment/components/show-managment/show-managment.component';
import { ShowParentsComponent } from './modules/parent/components/show-parents/show-parents.component';
import { ShowTeacherComponent } from './modules/teacher/components/show-teacher/show-teacher.component';
import { TeacherLoginComponent } from './modules/auth/components/teacher-login/teacher-login.component';
import { ShowExamsComponent } from './modules/exams/components/show-exams/show-exams.component';
import { AddResultsComponent } from './modules/results/components/add-results/add-results.component';
import { ShowResultsComponent } from './modules/results/components/show-results/show-results.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: 'students', component: StudentListComponent },
      { path: 'add_student', component: StudentCreateComponent },
      { path: 'student:id', component: StudentDetailsComponent },
      { path: 'dashboard', component: DashboardMainComponent },
      { path: 'class', component: ShowClassComponent },
      { path: 'courses', component: ShowCoursesComponent },
      { path: 'finance', component: ShowFinanceComponent },
      { path: 'managment', component: ShowManagmentComponent },
      { path: 'parents', component: ShowParentsComponent },
      { path: 'staff', component: ShowTeacherComponent },
      { path: 'exams', component: ShowExamsComponent },
      { path: 'postResults', component: AddResultsComponent },
      { path: 'results', component: ShowResultsComponent },
    ],
  },

  {
    path: '',
    component: AuthLayoutComponent,
    // canActivate: [LoginGuard],
    children: [{ path: 'login', component: TeacherLoginComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
