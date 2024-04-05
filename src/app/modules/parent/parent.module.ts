import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowParentsComponent } from './components/show-parents/show-parents.component';
import { UpdateParentComponent } from './components/update-parent/update-parent.component';
import { CreateParentComponent } from './components/create-parent/create-parent.component';



@NgModule({
  declarations: [
    ShowParentsComponent,
    UpdateParentComponent,
    CreateParentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ParentModule { }
