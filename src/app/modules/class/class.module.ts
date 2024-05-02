import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowClassComponent } from './components/show-class/show-class.component';
import { CreateClassComponent } from './components/create-class/create-class.component';
import { UpdateClassComponent } from './components/update-class/update-class.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateSubClassComponent } from './components/create-sub-class/create-sub-class.component';
import { ShowSubClassComponent } from './components/show-sub-class/show-sub-class.component';
import { UpdateSubClassComponent } from './components/update-sub-class/update-sub-class.component';



@NgModule({
  declarations: [
    ShowClassComponent,
    CreateClassComponent,
    UpdateClassComponent,
    CreateSubClassComponent,
    ShowSubClassComponent,
    UpdateSubClassComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ClassModule { }
