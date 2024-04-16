import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowResultsComponent } from './components/show-results/show-results.component';
import { UpdateResultsComponent } from './components/update-results/update-results.component';
import { AddResultsComponent } from './components/add-results/add-results.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ShowResultsComponent,
    UpdateResultsComponent,
    AddResultsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ResultsModule { }
