import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../../../shared/interfaces/teacher.interface';
import { TeacherService } from '../../../../shared/services/teacher.service';
import { Router } from '@angular/router';
import { CourseService } from '../../../../shared/services/course.service';
import { Course } from '../../../../shared/interfaces/courses.interface';
import { TeacherCourseService } from '../../../../shared/services/teacher-course.service';
import { ExamsService } from '../../../../shared/services/exams.service';
import { Exams } from '../../../../shared/interfaces/exams.interface';
import { ClassService } from '../../../../shared/services/class.service';
import { Class } from '../../../../shared/interfaces/class.interface';
import { Observable } from 'rxjs';

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
  classes: Class[] = [];
  teacherCourses: any[] = [];
  teacherExams: Exams[] = [];
  classTeacherClass: any;

  constructor(
    private teacherService: TeacherService,
    private coursesService: CourseService,
    private classService: ClassService,
    private teacherCoursesService: TeacherCourseService,
    private examsService: ExamsService
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
          this.getTeacherCourses();
          this.getTeacherExams(teacher.id);
          this.getAllClasses();
        });
    }
    this.getAllCourses();
  }
  getTeacherById(teacherId: number): void {
    this.teacherService.getTeacherById(teacherId).subscribe((teacher) => {
      this.teacher = teacher;
    });
  }

  getTeacherCourses() {
    this.teacherCoursesService.getAllTeacherCourses().subscribe((courses) => {
      this.teacherCourses = courses.filter(
        (course) => course.teacherId === this.teacher.id
      );
    });
  }
  getAllCourses() {
    this.coursesService.getAllCourse().subscribe((courses) => {
      this.courses = courses;
    });
  }
  getCourseNameById(id: number): string {
    const courseName = this.courses.find((course) => course.id === id);
    if (courseName) {
      return courseName.name;
    } else {
      return 'loading...';
    }
  }
  getTeacherExams(id: number) {
    this.examsService.getAllExams().subscribe((exams) => {
      this.teacherExams = exams.filter((exam) => exam.teacherId === id);
    });
  }
  getAllClasses() {
    this.classService.getAllClasses().subscribe(
      (data) => {
        this.classes = data;
        console.log('All classes', this.classes);
        this.getClassTeacherClass(
          this.teacher.firstName,
          this.teacher.lastName
        );
      },
      (error) => {
        console.error('Error fetching classes:', error);
      }
    );
  }
  getClassTeacherClass(firstName: string, lastName: string) {
    const teacherFullName = `${firstName} ${lastName}`;
    console.log('Teacher full name:', teacherFullName);
    console.log('Checking if classes are loaded:', this.classes);
    this.classTeacherClass =
      this.classes.find(
        (classItem) =>
          classItem.classTeacher.toLowerCase().trim() ===
          teacherFullName.toLowerCase().trim()
      ) || [];
    console.log("Class teacher's class:", this.classTeacherClass);
  }
}
