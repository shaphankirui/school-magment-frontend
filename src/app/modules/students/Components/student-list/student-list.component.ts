import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentService } from '../../../../shared/services/student.service';
import { Student } from '../../../../shared/interfaces/student.interface';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent implements OnInit{
  students:Student[] = [];
  @Input() modalId: string = '';
  isModalVisible: boolean = false;
  isEditModalVisible: boolean = false;
  studentIdToEdit: number | null = null;
  @Output() editStudent = new EventEmitter<number>(); // Event emitter for edit


  toggleModal() {
    this.isModalVisible = !this.isModalVisible;
  }
  toggleEditModal(id: number | null) {
    this.studentIdToEdit = id;
    this.isEditModalVisible = !this.isEditModalVisible;
    if (id !== null) {
      this.editStudent.emit(id); // Emit event with student ID
    }
  }

  constructor(
    private studentService: StudentService
  ) {}
  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents(){
    this.studentService.getAllStudents().subscribe((data:Student[])=>{
      this.students=data;
      console.log('All Students', this.students);
    });
  }

  

}
