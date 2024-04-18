import { Component } from '@angular/core';
import { AuthService } from '../../../../shared/services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.scss'],
})
export class TeacherLoginComponent {
  email: string = '';
  password: string = '';
  selectedRole: string = '';
  rememberMe: boolean = false;

  constructor(
    private authService: AuthService,
    private toast: HotToastService,
    private router: Router
  ) {}

  ngOnInit() {
    // Retrieve saved credentials if "Remember Me" was checked
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    const savedRole = localStorage.getItem('role');

    if (savedEmail && savedPassword && savedRole) {
      this.email = savedEmail;
      this.password = savedPassword;
      this.selectedRole = savedRole;
      this.rememberMe = true; // Check the checkbox
    }
  }

  login() {
    console.log(
      'Logging in with email:',
      this.email,
      'and password:',
      this.password
    );
    if (this.selectedRole === '') {
      this.toast.error('Select a role');
      return;
    }
    if (this.selectedRole === 'teacher') {
      this.authService
        .login({ email: this.email, password: this.password })
        .subscribe((data: any) => {
          // Check if login was successful and a token was returned
          if (data && data.access_token) {
            // Save the token to local storage
            localStorage.setItem('token', data.access_token);
            // Save credentials if "Remember Me" was checked
            console.log('Remember me:', this.rememberMe);
            if (this.rememberMe) {
              localStorage.setItem('email', this.email);
              localStorage.setItem('password', this.password);
              localStorage.setItem('role', this.selectedRole);
            } else {
              // Clear saved credentials if "Remember Me" was unchecked
              localStorage.removeItem('email');
              localStorage.removeItem('password');
              localStorage.removeItem('role');
            }
            this.toast.success('Login Successful');
            this.router.navigate(['/staff']);
            console.log('Token saved to local storage:', data.access_token);
          }
        });
    }
  }
}
