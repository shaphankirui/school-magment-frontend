import { Component, EventEmitter, Output } from '@angular/core';
import { ExamsService } from '../../../../shared/services/exams.service';
import { Exams } from '../../../../shared/interfaces/exams.interface';
import { Class } from '../../../../shared/interfaces/class.interface';

@Component({
  selector: 'app-show-exams',
  templateUrl: './show-exams.component.html',
  styleUrl: './show-exams.component.scss'
})
export class ShowExamsComponent {
  exams: Exams [] = [];
  constructor(
      private examsService: ExamsService
  ) { }
  ngOnInit(): void {
    this.getAllExams();
  }
  isModalVisible: boolean = false;
  isEditModalVisible: boolean = false;
  examId: number | null = null;
  @Output() editStudent = new EventEmitter<number>(); // Event emitter for edit


  toggleModal() {
    this.isModalVisible = !this.isModalVisible;
  }
  toggleEditModal(id: number | null) {
    this.examId = id;
    this.isEditModalVisible = !this.isEditModalVisible;
    if (id !== null) {
      this.editStudent.emit(id); // Emit event with student ID
    }
    this.getAllExams();
  }

  getAllExams() {
    this.examsService.getAllExams().subscribe((data: Exams[]) => {
      this.exams = data;
      console.log('All classes', this.exams);
    })
  }
 
}
