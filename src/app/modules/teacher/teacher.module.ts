import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTeacherComponent } from './components/create-teacher/create-teacher.component';
import { UpdateTeacherComponent } from './components/update-teacher/update-teacher.component';
import { ShowTeacherComponent } from './components/show-teacher/show-teacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TeacherProfileComponent } from './components/teacher-profile/teacher-profile.component';



@NgModule({
  declarations: [
    CreateTeacherComponent,
    UpdateTeacherComponent,
    ShowTeacherComponent,
    TeacherProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class TeacherModule { }
