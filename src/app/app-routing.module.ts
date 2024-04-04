import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentCreateComponent } from './modules/students/Components/student-create/student-create.component';
import { StudentDetailsComponent } from './modules/students/Components/student-details/student-details.component';
import { StudentListComponent } from './modules/students/Components/student-list/student-list.component';

const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'create', component: StudentCreateComponent },
  { path: ':id', component: StudentDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
