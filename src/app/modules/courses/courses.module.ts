import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateCourseComponent } from './components/update-course/update-course.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { ShowCoursesComponent } from './components/show-courses/show-courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    UpdateCourseComponent,
    CreateCourseComponent,
    ShowCoursesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CoursesModule { }
