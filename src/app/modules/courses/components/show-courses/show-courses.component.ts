import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Course } from '../../../../shared/interfaces/courses.interface';
import { CourseService } from '../../../../shared/services/course.service';

@Component({
  selector: 'app-show-courses',
  templateUrl: './show-courses.component.html',
  styleUrl: './show-courses.component.scss'
})
export class ShowCoursesComponent implements OnInit {
  courses: Course[] = [];
  constructor(
      private courseService: CourseService
  ) { }
  ngOnInit(): void {
    this.getAllCourses();
  }
  isModalVisible: boolean = false;
  isEditModalVisible: boolean = false;
  courseId: number | null = null;
  @Output() editStudent = new EventEmitter<number>(); // Event emitter for edit


  toggleModal() {
    this.isModalVisible = !this.isModalVisible;
  }
  toggleEditModal(id: number | null) {
    this.courseId = id;
    this.isEditModalVisible = !this.isEditModalVisible;
    if (id !== null) {
      this.editStudent.emit(id); // Emit event with student ID
    }
    this.getAllCourses();
  }

  getAllCourses() {
    this.courseService.getAllCourse().subscribe((data: Course[]) => {
      this.courses = data;
      console.log('All classes', this.courses);
    })
  }

}
