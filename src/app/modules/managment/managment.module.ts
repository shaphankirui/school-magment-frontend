import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateManagmentComponent } from './components/create-managment/create-managment.component';
import { UpdateManagmentComponent } from './components/update-managment/update-managment.component';
import { ShowManagmentComponent } from './components/show-managment/show-managment.component';



@NgModule({
  declarations: [
    CreateManagmentComponent,
    UpdateManagmentComponent,
    ShowManagmentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ManagmentModule { }
