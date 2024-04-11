import { Component } from '@angular/core';
import { AuthService } from '../../../../shared/services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.scss'] // Corrected styleUrls
})
export class TeacherLoginComponent {
  email: string = '';
  password: string = '';
  selectedRole: string = '';

  constructor(private authService: AuthService,
    private toast:HotToastService,
    private route:Router
  ) {}

  login() {
    console.log('Logging in with email:', this.email, 'and password:', this.password);
    if(this.selectedRole === ''){
      this.toast.error('Select a role');
      return;
    }
    if(this.selectedRole === 'teacher') {
      this.authService.login({ email: this.email, password: this.password }).subscribe((data: any) => {
        // Check if login was successful and a token was returned
        if (data && data.access_token) {
          // Save the token to local storage
          localStorage.setItem('token', data.access_token);
          this.toast.success('Login Successful');
          this.route.navigate(['/staff']);
          console.log('Token saved to local storage:', data.access_token);
        }
      });
    }
   if(this.selectedRole ==='management') {
    this.authService.loginManagment({ email: this.email, password: this.password }).subscribe((data: any) => {
      // Check if login was successful and a token was returned
      if (data && data.access_token) {
        // Save the token to local storage
        localStorage.setItem('token', data.access_token);
        this.toast.success('Login Successful');
        this.route.navigate(['/dashboard']);
        console.log('Token saved to local storage:', data.access_token);
      }
    });
   }
  }
}
