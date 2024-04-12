import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { ExamsService } from '../../../../shared/services/exams.service';
import { Exams } from '../../../../shared/interfaces/exams.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-exams',
  templateUrl: './update-exams.component.html',
  styleUrl: './update-exams.component.scss'
})
export class UpdateExamsComponent  implements OnChanges {
  
  @Input() modalId: string = '';
  @Input() examsId: number | null = null;
  @Input() isModalVisible: boolean = false;
  @Output() toggleModal = new EventEmitter<void>();
  examForm: FormGroup;


  constructor(
    private examsService: ExamsService,
    private toast: HotToastService,
    private formBuilder: FormBuilder
  ) { 
    this.examForm = this.formBuilder.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      courseId: [null, Validators.required],
      teacherId: [null, Validators.required],
      academicTermId: [null, Validators.required],
      passMark: [null, Validators.required],
      outOf: [null, Validators.required]
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['examsId'] && !changes['examsId'].firstChange) {
      this.getClassById(this.examsId!);
    }
  }
  closeModal() {
    this.toggleModal.emit();
  }
  getClassById(id: number) {
    this.examsService.getExamById(id).subscribe((data: Exams) => {
      this.examForm.setValue({
        name: data.name,
        date: data.date,
        courseId: data.courseId,
        teacherId: data.teacherId,
        academicTermId: data.academicTermId,
        passMark: data.passMark,
        outOf: data.outOf,
      })
    })
  }
  onSubmit(){
    console.log("Calss to be created",this.examForm.value);
    this.examsService.createExam(this.examForm.value).subscribe((data: any) => {
      console.log(data);
      this.toast.success('Class created successfully');
      this.closeModal();
      this.clearForm();
  })
}
clearForm() {
 this.examForm.setValue({
    name: '',
    date: '',
    courseId: '',
    teacherId: '',
    academicTermId:'',
    passMark: '',
    outOf: '',
 })
}


}
