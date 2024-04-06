import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowClassComponent } from './components/show-class/show-class.component';
import { CreateClassComponent } from './components/create-class/create-class.component';
import { UpdateClassComponent } from './components/update-class/update-class.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ShowClassComponent,
    CreateClassComponent,
    UpdateClassComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ClassModule { }
