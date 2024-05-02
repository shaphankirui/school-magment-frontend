import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClassService } from '../../../../shared/services/class.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Class } from '../../../../shared/interfaces/class.interface';
import { Teacher } from '../../../../shared/interfaces/teacher.interface';
import { Student } from '../../../../shared/interfaces/student.interface';
import { TeacherService } from '../../../../shared/services/teacher.service';

@Component({
  selector: 'app-create-sub-class',
  templateUrl: './create-sub-class.component.html',
  styleUrls: ['./create-sub-class.component.scss'],
})
export class CreateSubClassComponent {
  @Input() modalId: string = '';
  @Input() isModalVisible: boolean = false;
  @Output() toggleModal = new EventEmitter<void>();
  classes: Class[] = [];
  teachers: Teacher[] = [];
  students: Student[] = [];

  classDetails: any = {
    name: '',
    classTeacher: null,
    classPrefect: null,
    classId: null,
  };

  constructor(
    private classService: ClassService,
    private teachersService: TeacherService,
    private toast: HotToastService
  ) {}

  ngOnInit() {
    this.getAllClasses();
    this.getAllTeacher();
  }

  closeModal() {
    this.toggleModal.emit();
  }

  onSubmit() {
    // Convert classTeacher, classId, and classPrefect to numbers
    this.classDetails.classTeacher = +this.classDetails.classTeacher;
    this.classDetails.classId = +this.classDetails.classId;
    this.classDetails.classPrefect = +this.classDetails.classPrefect;

    console.log('Class to be created', this.classDetails);
    this.classService
      .createSubClass(this.classDetails)
      .subscribe((data: any) => {
        console.log(data);
        this.toast.success('Class created successfully');
        this.closeModal();
        this.clearForm();
      });
  }

  clearForm() {
    this.classDetails = {
      name: '',
      classTeacher: '',
      classPrefect: '',
      classId: '',
    };
  }

  getAllClasses() {
    this.classService.getAllClasses().subscribe((data) => {
      this.classes = data;
    });
  }

  getAllTeacher() {
    this.teachersService.getAllTeacher().subscribe((data) => {
      this.teachers = data;
    });
  }
}
