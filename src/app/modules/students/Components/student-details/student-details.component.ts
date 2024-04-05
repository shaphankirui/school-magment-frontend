import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassService } from '../../../../shared/services/class.service';
import { ParentService } from '../../../../shared/services/parent.service';
import { StudentService } from '../../../../shared/services/student.service';
import { Class } from '../../../../shared/interfaces/class.interface';
import { Parent } from '../../../../shared/interfaces/parent.interface';
import { Student } from '../../../../shared/interfaces/student.interface';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit, OnChanges {
  
  @Input() modalId: string = '';
  @Input() studentId: number | null = null;
  @Input() isModalVisible: boolean = false;
  @Output() toggleModal = new EventEmitter<void>();

  studentForm!: FormGroup; 
  classes: Class[] = [];
  parents: Parent[] = [];

  constructor(
    private fb: FormBuilder,
    private classService: ClassService,
    private parentService: ParentService,
    private studentService: StudentService,
    private toast:HotToastService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.getAllClasses();
    this.getAllParents();
    // this.getStudentById(this.studentId!);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['studentId'] && !changes['studentId'].firstChange) {
      this.getStudentById(this.studentId!);
    }
  }

  createForm() {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      otherName: [''],
      gender: ['', Validators.required],
      classId: [null, Validators.required], // Set default value to null
      parentId: [null, Validators.required], // Set default value to null
    });
  }

  getAllClasses() {
    this.classService.getAllClasses().subscribe((data: Class[]) => {
      this.classes = data;
      console.log('All classes', this.classes);
    });
  }

  getAllParents() {
    this.parentService.getAllparents().subscribe((data: Parent[]) => {
      this.parents = data;
      console.log('All parents', this.parents);
    });
  }

  getStudentById(id: number) {

    console.log("Getting student by id", id);
    this.studentService.getStudentById(id).subscribe((data: Student) => {
      this.studentForm.setValue({
        firstName: data.firstName,
        lastName: data.lastName,
        otherName: data.otherName,
        gender: data.gender,
        classId: data.classId,
        parentId: data.parentId
      });
      console.log('Student details', data);
    });
  }

  onSubmit() {
    if (!this.studentForm.valid) {
      console.log('Invalid form');
      return;
    }
    const data = {
      firstName:this.studentForm.get('firstName')?.value,
      lastName:this.studentForm.get('lastName')?.value,
      otherName:this.studentForm.get('otherName')?.value,
      gender:this.studentForm.get('gender')?.value,
      classId:this.studentForm.get('classId')?.value,
      parentId:this.studentForm.get('parentId')?.value
    }
    console.log('Submitting student form: ', data);
    this.studentService.updateStudent(this.studentId!, this.studentForm.value).subscribe((data: any) => {
      console.log('Student updated', data);
      this.closeModal();
    });

  }

  closeModal() {
    this.toggleModal.emit();
  }
}
