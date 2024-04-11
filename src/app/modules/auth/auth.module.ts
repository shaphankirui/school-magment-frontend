import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherLoginComponent } from './components/teacher-login/teacher-login.component';
import { ParentLoginComponent } from './components/parent-login/parent-login.component';
import { ManagmentLoginComponent } from './components/managment-login/managment-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    TeacherLoginComponent,
    ParentLoginComponent,
    ManagmentLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
