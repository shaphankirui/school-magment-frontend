import { NgModule } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentListComponent } from './Components/student-list/student-list.component';
import { StudentCreateComponent } from './Components/student-create/student-create.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    StudentListComponent,
    StudentCreateComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    StudentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgForOf
  ]
})
export class StudentsModule { }
