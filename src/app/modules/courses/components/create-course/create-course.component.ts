import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseService } from '../../../../shared/services/course.service';
import { HotToastService } from '@ngneat/hot-toast';
import { GradeRange } from '../../../../shared/environments/gradeRange.interface';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.scss',
})
export class CreateCourseComponent {
  gradeRanges: GradeRange[] = [
    { grade: 'E', range: { min: 0, max: 0 }, points: 1 },
    { grade: 'D-', range: { min: 0, max: 0 }, points: 2 },
    { grade: 'D', range: { min: 0, max: 0 }, points: 3 },
    { grade: 'D+', range: { min: 0, max: 0 }, points: 4 },
    { grade: 'C-', range: { min: 0, max: 0 }, points: 5 },
    { grade: 'C', range: { min: 0, max: 0 }, points: 6 },
    { grade: 'C+', range: { min: 0, max: 0 }, points: 7 },
    { grade: 'B-', range: { min: 0, max: 0 }, points: 8 },
    { grade: 'B', range: { min: 0, max: 0 }, points: 9 },
    { grade: 'B+', range: { min: 0, max: 0 }, points: 10 },
    { grade: 'A-', range: { min: 0, max: 0 }, points: 11 },
    { grade: 'A', range: { min: 0, max: 0 }, points: 12 },
  ];

  @Input() modalId: string = '';
  @Input() isModalVisible: boolean = false;
  @Output() toggleModal = new EventEmitter<void>();

  courseDetails: any = {
    name: '',
  };

  constructor(
    private courseService: CourseService,
    private toast: HotToastService
  ) {}
  closeModal() {
    this.toggleModal.emit();
  }
  onSubmit() {
    console.log('Calss to be created', this.courseDetails);
    this.courseService
      .createCourse(this.courseDetails)
      .subscribe((data: any) => {
        console.log(data);
        this.createCourseGradingSystem(data.id, this.gradeRanges);
        this.toast.success('Class created successfully');
        this.closeModal();
        this.clearForm();
      });
  }
  clearForm() {
    this.courseDetails = {
      name: '',
    };
  }
  createCourseGradingSystem(id: number, gradeData: any) {
    console.log('id', id);
    this.courseService
      .createCourseGradingSytem(id, gradeData)
      .subscribe((data: any) => {
        console.log(data);
        this.toast.success('Grading system created successfully');
      });
  }
}
