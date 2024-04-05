import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateCourseComponent } from './components/update-course/update-course.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { ShowCoursesComponent } from './components/show-courses/show-courses.component';



@NgModule({
  declarations: [
    UpdateCourseComponent,
    CreateCourseComponent,
    ShowCoursesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
