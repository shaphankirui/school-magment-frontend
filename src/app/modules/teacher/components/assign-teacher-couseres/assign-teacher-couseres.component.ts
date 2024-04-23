import { Component, OnInit } from '@angular/core';
import { Course } from '../../../../shared/interfaces/courses.interface';
import { Teacher } from '../../../../shared/interfaces/teacher.interface';
import { CourseService } from '../../../../shared/services/course.service';
import { TeacherCourseService } from '../../../../shared/services/teacher-course.service';
import { TeacherService } from '../../../../shared/services/teacher.service';

@Component({
  selector: 'app-assign-teacher-couseres',
  templateUrl: './assign-teacher-couseres.component.html',
  styleUrl: './assign-teacher-couseres.component.scss',
})
export class AssignTeacherCoursesComponent implements OnInit {
  teachers: Teacher[] = [];
  courses: Course[] = [];
  teacherCourseMappings: { teacherId: number; courseId: number }[] = [];
  selectedTeacherId: number | null = null;
  selectedCourseId: number | null = null;

  constructor(
    private teacherCourseService: TeacherCourseService,
    private teacherService: TeacherService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.fetchTeachers();
    this.fetchCourses();
    this.fetchTeacherCourseMappings();
  }

  fetchTeachers(): void {
    this.teacherService.getAllTeacher().subscribe((teachers) => {
      this.teachers = teachers;
    });
  }

  fetchCourses(): void {
    this.courseService.getAllCourse().subscribe((courses) => {
      this.courses = courses;
    });
  }

  fetchTeacherCourseMappings(): void {
    this.teacherCourseService.getAllTeacherCourses().subscribe((mappings) => {
      this.teacherCourseMappings = mappings;
    });
  }

  getTeacherNameById(teacherId: number): string {
    const teacher = this.teachers.find((t) => t.id === teacherId);
    return teacher ? `${teacher.firstName} ${teacher.lastName}` : '';
  }

  getCourseNameById(courseId: number): string {
    const course = this.courses.find((c) => c.id === courseId);
    return course ? course.name : '';
  }

  assignTeacherToCourse(): void {
    if (this.selectedTeacherId && this.selectedCourseId) {
      this.teacherCourseService
        .createTeacherCourse({
          teacherId: +this.selectedTeacherId,
          courseId: +this.selectedCourseId,
        })
        .subscribe(() => {
          this.fetchTeacherCourseMappings();
        });
    }
  }

  deleteTeacherCourseMapping(teacherId: number, courseId: number): void {
    this.teacherCourseService
      .deleteTeacherCourse(teacherId, courseId)
      .subscribe(() => {
        this.fetchTeacherCourseMappings();
      });
  }
}
