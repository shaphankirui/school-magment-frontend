import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Class, SubClass } from '../../../../shared/interfaces/class.interface';
import { ClassService } from '../../../../shared/services/class.service';
import { Student } from '../../../../shared/interfaces/student.interface';
import { Teacher } from '../../../../shared/interfaces/teacher.interface';
import { TeacherService } from '../../../../shared/services/teacher.service';
import { StudentService } from '../../../../shared/services/student.service';

@Component({
  selector: 'app-show-sub-class',
  templateUrl: './show-sub-class.component.html',
  styleUrl: './show-sub-class.component.scss',
})
export class ShowSubClassComponent implements OnInit {
  classes: SubClass[] = [];
  maniClasses: Class[] = [];
  teachers: Teacher[] = [];
  students: Student[] = [];
  constructor(
    private classService: ClassService,
    private teacherService: TeacherService,
    private studentsService: StudentService
  ) {}
  ngOnInit(): void {
    this.getAllClasses();
    this.getAllMainClasses();
    this.getAllTeachers();
    this.getAllStudent();
  }
  isModalVisible: boolean = false;
  isEditModalVisible: boolean = false;
  classId: number | null = null;
  @Output() editStudent = new EventEmitter<number>(); // Event emitter for edit

  toggleModal() {
    this.isModalVisible = !this.isModalVisible;
  }
  toggleEditModal(id: number | null) {
    this.classId = id;
    this.isEditModalVisible = !this.isEditModalVisible;
    if (id !== null) {
      this.editStudent.emit(id); // Emit event with student ID
    }
    this.getAllClasses();
  }

  getAllClasses() {
    this.classService.getAllSubClasses().subscribe((data: SubClass[]) => {
      this.classes = data;
      console.log('All classes', this.classes);
    });
  }

  getAllMainClasses() {
    this.classService.getAllClasses().subscribe((data: Class[]) => {
      this.maniClasses = data;
    });
  }
  getAllStudent() {
    this.studentsService.getAllStudents().subscribe((data: Student[]) => {
      this.students = data;
    });
  }

  getAllTeachers() {
    this.teacherService.getAllTeacher().subscribe((data) => {
      this.teachers = data;
    });
  }

  getClassName(id: number): string {
    const classs = this.maniClasses.find((classs) => classs.id === id);
    if (classs) {
      return classs.name;
    } else {
      return '';
    }
  }

  getStudentName(id: number): string {
    const student = this.students.find((stude) => stude.id === id);
    if (student) {
      return student.firstName + ' ' + student.lastName;
    } else {
      return '';
    }
  }

  getTeachersName(id: number): string {
    const teacher = this.teachers.find((teacher) => teacher.id === id);
    if (teacher) {
      return teacher.firstName + ' ' + teacher.lastName;
    } else {
      return '';
    }
  }
}
