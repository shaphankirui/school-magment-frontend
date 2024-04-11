import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  providers: [provideCharts(withDefaultRegisterables())],
  declarations: [DashboardMainComponent],
  imports: [
    CommonModule,
    BrowserModule,
  ]
})
export class DashboardModule { }