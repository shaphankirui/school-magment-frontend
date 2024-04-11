import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CourseService } from '../../../../shared/services/course.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Course } from '../../../../shared/interfaces/courses.interface';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrl: './update-course.component.scss'
})
export class UpdateCourseComponent implements OnChanges {

  @Input() modalId: string = '';
  @Input() courseId: number | null = null;
  @Input() isModalVisible: boolean = false;
  @Output() toggleModal = new EventEmitter<void>();
  classDetails: any = {
    name: '',
    classTeacher: '',
    classPrefect: '',
  }



  constructor( 
    private courseService: CourseService,
    private toast: HotToastService,
  ) { }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['courseId'] && !changes['courseId'].firstChange) {
      this.getClassById(this.courseId!);
    }
  }
  closeModal() {
    this.toggleModal.emit();
  }
  getClassById(id: number) {
    this.courseService.getCourseById(id).subscribe((data: Course) => {
      this.classDetails = {
        name: data.name
      }
    })
  }
  onSubmit(){
    console.log("Calss to be created",this.classDetails);
    this.courseService.updateCourse(this.courseId!,this.classDetails).subscribe((data: any) => {
      console.log(data);
      this.toast.success('Class Update successfully');
      this.closeModal();
      this.clearForm();
  })
}
clearForm() {
  this.classDetails = {
    name: '',
  }
}

}
