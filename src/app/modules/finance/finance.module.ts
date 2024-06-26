import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowFinanceComponent } from './components/show-finance/show-finance.component';
import { CreateFinanceComponent } from './components/create-finance/create-finance.component';
import { UpdateFinanceComponent } from './components/update-finance/update-finance.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowStudentsFeeComponent } from './components/show-students-fee/show-students-fee.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ShowFinanceComponent,
    CreateFinanceComponent,
    UpdateFinanceComponent,
    ShowStudentsFeeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FinanceModule {}
