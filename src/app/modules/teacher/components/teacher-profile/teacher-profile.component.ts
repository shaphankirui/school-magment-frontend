import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../../../shared/interfaces/teacher.interface';
import { TeacherService } from '../../../../shared/services/teacher.service';

// Import jwt-decode using require
const jwtDecode = {};

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.scss'],
})
export class TeacherProfileComponent implements OnInit {
  teacher: Teacher = {
    firstName: '',
    lastName: '',
    email: '',
    otherName: '',
    gender: '',
    id: 0,
    passowrd: '',
  };

  constructor(private teacherService: TeacherService) {}

  ngOnInit(): void {
    // Retrieve token from localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // Decode token to extract payload
      // const decodedToken: any = jwtDecode(token);
      // Extract teacher ID from decoded token
      // const teacherId = decodedToken.sub;
      // Fetch teacher details using the extracted ID
      // this.getTeacherById(teacherId);
    }
  }

  getTeacherById(teacherId: number): void {
    this.teacherService.getTeacherById(teacherId).subscribe((teacher) => {
      this.teacher = teacher;
    });
  }
}
