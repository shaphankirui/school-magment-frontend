import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentListComponent } from './Components/student-list/student-list.component';
import { StudentCreateComponent } from './Components/student-create/student-create.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentListComponent,
    StudentCreateComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentsModule { }
