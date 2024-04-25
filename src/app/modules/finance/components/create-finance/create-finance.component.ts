import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FinanceService } from '../../../../shared/services/finance.service';
import { HotToastService } from '@ngneat/hot-toast';
import { StudentService } from '../../../../shared/services/student.service';
import { Student } from '../../../../shared/interfaces/student.interface';

@Component({
  selector: 'app-create-finance',
  templateUrl: './create-finance.component.html',
  styleUrl: './create-finance.component.scss',
})
export class CreateFinanceComponent {
  students: Student[] = [];
  @Input() modalId: string = '';
  @Input() isModalVisible: boolean = false;
  @Output() toggleModal = new EventEmitter<void>();

  paymentDetails: any = {
    studentId: null,
    paymentMode: '',
    amount: 0,
    confirmationCode: '',
  };

  constructor(
    private financeService: FinanceService,
    private studentService: StudentService,
    private toast: HotToastService
  ) {}
  ngOnInit() {
    this.getAllStudents();
  }
  closeModal() {
    this.toggleModal.emit();
  }

  getAllStudents() {
    this.studentService.getAllStudents().subscribe((data: Student[]) => {
      this.students = data;
      console.log('All students', this.students);
    });
  }

  onSubmit() {
    console.log('Calss to be created', this.paymentDetails);
    const paymentData = {
      ...this.paymentDetails,
      studentId: +this.paymentDetails.studentId, // Convert to number
    };
    this.financeService.create(paymentData).subscribe((data: any) => {
      console.log(data);
      this.toast.success('Class created successfully');
      this.closeModal();
      this.clearForm();
    });
  }
  clearForm() {
    this.paymentDetails = {
      studentId: '',
      paymentMode: '',
      amount: '',
      confirmationCode: '',
    };
  }
}
