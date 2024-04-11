import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseService } from '../../../../shared/services/course.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.scss'
})
export class CreateCourseComponent {

  @Input() modalId: string = '';
  @Input() isModalVisible: boolean = false;
  @Output() toggleModal = new EventEmitter<void>();

  courseDetails: any = {
    name: '',
  
  }

  constructor(
    private courseService: CourseService,
    private toast: HotToastService,
  ) { }
  closeModal() {
    this.toggleModal.emit();
  }
  onSubmit(){
    console.log("Calss to be created",this.courseDetails);
    this.courseService.createCourse(this.courseDetails).subscribe((data: any) => {
      console.log(data);
      this.toast.success('Class created successfully');
      this.closeModal();
      this.clearForm();
  })
}
clearForm() {
  this.courseDetails = {
    name: '',
  }
}

}
