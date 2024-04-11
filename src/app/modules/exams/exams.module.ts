import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateExamsComponent } from './components/create-exams/create-exams.component';
import { ShowExamsComponent } from './components/show-exams/show-exams.component';
import { UpdateExamsComponent } from './components/update-exams/update-exams.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateExamsComponent,
    ShowExamsComponent,
    UpdateExamsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ExamsModule { }
