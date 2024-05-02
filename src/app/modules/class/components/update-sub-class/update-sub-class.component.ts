import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Class, SubClass } from '../../../../shared/interfaces/class.interface';
import { Student } from '../../../../shared/interfaces/student.interface';
import { Teacher } from '../../../../shared/interfaces/teacher.interface';
import { ClassService } from '../../../../shared/services/class.service';
import { TeacherService } from '../../../../shared/services/teacher.service';

@Component({
  selector: 'app-update-sub-class',
  templateUrl: './update-sub-class.component.html',
  styleUrl: './update-sub-class.component.scss',
})
export class UpdateSubClassComponent {
  @Input() modalId: string = '';
  @Input() classId: number | null = null;
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
  ngOnChanges(changes: SimpleChanges) {
    if (changes['classId'] && !changes['classId'].firstChange) {
      this.getClassById(this.classId!);
    }
  }
  closeModal() {
    this.toggleModal.emit();
  }
  getClassById(id: number) {
    this.classService.getSubClassById(id).subscribe((data: SubClass) => {
      this.classDetails = {
        name: data.name,
        classTeacher: data.classTeacher,
        classPrefect: data.classPrefect,
        classId: data.classId,
      };
    });
  }
  onSubmit() {
    this.classDetails.classTeacher = +this.classDetails.classTeacher;
    this.classDetails.classId = +this.classDetails.classId;
    this.classDetails.classPrefect = +this.classDetails.classPrefect;
    console.log('Calss to be created', this.classDetails);
    this.classService
      .updateSubClass(this.classId!, this.classDetails)
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
