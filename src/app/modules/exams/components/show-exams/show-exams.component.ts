import { Component } from '@angular/core';

@Component({
  selector: 'app-show-exams',
  templateUrl: './show-exams.component.html',
  styleUrl: './show-exams.component.scss'
})
export class ShowExamsComponent {
  classes: Class[] = [];
  constructor(
      private classService: ClassService
  ) { }
  ngOnInit(): void {
    this.getAllClasses();
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
    this.classService.getAllClasses().subscribe((data: Class[]) => {
      this.classes = data;
      console.log('All classes', this.classes);
    })
  }
 
}
