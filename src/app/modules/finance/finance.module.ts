import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowFinanceComponent } from './components/show-finance/show-finance.component';
import { CreateFinanceComponent } from './components/create-finance/create-finance.component';
import { UpdateFinanceComponent } from './components/update-finance/update-finance.component';



@NgModule({
  declarations: [
    ShowFinanceComponent,
    CreateFinanceComponent,
    UpdateFinanceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FinanceModule { }
