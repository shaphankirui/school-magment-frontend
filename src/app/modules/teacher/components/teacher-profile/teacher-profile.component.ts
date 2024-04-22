import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../../../shared/interfaces/teacher.interface';
import { TeacherService } from '../../../../shared/services/teacher.service';
import { Router } from '@angular/router';
import { CourseService } from '../../../../shared/services/course.service';
import { Course } from '../../../../shared/interfaces/courses.interface';

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
  courses: Course[] = [];

  constructor(
    private teacherService: TeacherService,
    private coursesService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Retrieve token from localStorage
    const token = localStorage.getItem('token');
    if (token) {
      console.log('token ', token);
      this.teacherService
        .getTeacherByToken(token)
        .subscribe((teacher: Teacher) => {
          this.teacher = teacher;
          console.log('loged in teacher ', this.teacher);
        });
    }
  }

  getTeacherById(teacherId: number): void {
    this.teacherService.getTeacherById(teacherId).subscribe((teacher) => {
      this.teacher = teacher;
    });
  }
  getTeacherCourses() {
    this.coursesService.getAllCourse().subscribe((courses) => {
      this.courses = courses.filter(
        (course) => course.teacherId === this.teacher.id
      );
      console.log('courses ', this.courses);
    });
  }
}
