import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgForOf } from '@angular/common';
import { StudentsModule } from './modules/students/students.module';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ClassModule } from './modules/class/class.module';
import { ParentModule } from './modules/parent/parent.module';
import { CoursesModule } from './modules/courses/courses.module';
import { FinanceModule } from './modules/finance/finance.module';
import { ManagmentModule } from './modules/managment/managment.module';
import { TeacherModule } from './modules/teacher/teacher.module';





@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    StudentsModule,
    DashboardModule,
    ClassModule,
    ParentModule,
    CoursesModule,
    FinanceModule,
    ManagmentModule,
    TeacherModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgForOf,
    
    // HotToastModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
