import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowClassComponent } from './components/show-class/show-class.component';
import { CreateClassComponent } from './components/create-class/create-class.component';
import { UpdateClassComponent } from './components/update-class/update-class.component';



@NgModule({
  declarations: [
    ShowClassComponent,
    CreateClassComponent,
    UpdateClassComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClassModule { }
