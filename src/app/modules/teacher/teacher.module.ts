import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTeacherComponent } from './components/create-teacher/create-teacher.component';
import { UpdateTeacherComponent } from './components/update-teacher/update-teacher.component';
import { ShowTeacherComponent } from './components/show-teacher/show-teacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TeacherProfileComponent } from './components/teacher-profile/teacher-profile.component';
import { RouterModule } from '@angular/router';
import { AssignTeacherCoursesComponent } from './components/assign-teacher-couseres/assign-teacher-couseres.component';

@NgModule({
  declarations: [
    CreateTeacherComponent,
    UpdateTeacherComponent,
    ShowTeacherComponent,
    TeacherProfileComponent,
    AssignTeacherCoursesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
})
export class TeacherModule {}
