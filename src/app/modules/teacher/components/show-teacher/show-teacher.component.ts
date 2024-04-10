import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Teacher } from '../../../../shared/interfaces/teacher.interface';
import { Student } from '../../../../shared/interfaces/student.interface';
import { StudentService } from '../../../../shared/services/student.service';
import { TeacherService } from '../../../../shared/services/teacher.service';

@Component({
  selector: 'app-show-teacher',
  templateUrl: './show-teacher.component.html',
  styleUrl: './show-teacher.component.scss'
})
export class ShowTeacherComponent {
  
  teachers:Teacher[] = [];
  // @Input() modalId: string = '';
  isModalVisible: boolean = false;
  isEditModalVisible: boolean = false;
  teacherId: number | null = null;
  @Output() editStudent = new EventEmitter<number>(); // Event emitter for edit


  toggleModal() {
    this.isModalVisible = !this.isModalVisible;
  }
  toggleEditModal(id: number | null) {
    this.teacherId = id;
    this.isEditModalVisible = !this.isEditModalVisible;
    if (id !== null) {
      this.editStudent.emit(id); // Emit event with student ID
    }
    this.getAllStudents();
  }

  constructor(
    private teacherService: TeacherService
  ) {}
  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents(){
    this.teacherService.getAllTeacher().subscribe((data:Teacher[])=>{
      this.teachers=data;
      console.log('All Students', this.teachers);
    });
  }

}
