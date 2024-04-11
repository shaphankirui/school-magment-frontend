import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherLoginComponent } from './components/teacher-login/teacher-login.component';


const routes: Routes = [
  { path: 'teacher-login', component: TeacherLoginComponent },
  // { path: 'register', component: RegistrationComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
