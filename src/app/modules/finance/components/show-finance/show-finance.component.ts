import { Component, EventEmitter, Output } from '@angular/core';
import { FinanceService } from '../../../../shared/services/finance.service';
import { Finance } from '../../../../shared/interfaces/finance.interface';
import { StudentService } from '../../../../shared/services/student.service';
import { Student } from '../../../../shared/interfaces/student.interface';

@Component({
  selector: 'app-show-finance',
  templateUrl: './show-finance.component.html',
  styleUrl: './show-finance.component.scss',
})
export class ShowFinanceComponent {
  finances: Finance[] = [];
  students: Student[] = [];
  isLoading: boolean = true;
  constructor(private financeService: FinanceService,private studentService: StudentService) { }

  ngOnInit() {
    this.getAllFinances();
    this.getAllStudents();
  }
  isModalVisible: boolean = false;
  isEditModalVisible: boolean = false;
  courseId: number | null = null;
  @Output() editStudent = new EventEmitter<number>(); // Event emitter for edit

  toggleModal() {
    this.isModalVisible = !this.isModalVisible;
    this.getAllFinances();
  }
  toggleEditModal(id: number | null) {
    this.courseId = id;
    this.isEditModalVisible = !this.isEditModalVisible;
    if (id !== null) {
      this.editStudent.emit(id); // Emit event with student ID
    }
    this.getAllFinances();
  }

  getAllFinances() {
    this.financeService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.finances = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getAllStudents() {
    this.studentService.getAllStudents().subscribe((data: Student[]) => {
      this.students = data;
      this.isLoading=false
      console.log('All students', this.students);
    });
  }

  getStudentName(studentId: number):string {
 const student = this.students.find((student) => student.id === studentId);
 if (student) {
  return student.firstName +' ' + student.lastName;
 
  } else {
    return 'loading..';
  }}
}
