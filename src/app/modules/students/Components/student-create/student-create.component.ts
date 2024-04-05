import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassService } from '../../../../shared/services/class.service';
import { Student } from '../../../../shared/interfaces/student.interface';
import { ParentService } from '../../../../shared/services/parent.service';
import { Parent } from '../../../../shared/interfaces/parent.interface';
import { Class } from '../../../../shared/interfaces/class.interface';
import { StudentService } from '../../../../shared/services/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss'],
})
export class StudentCreateComponent implements OnInit {
  studentForm!: FormGroup; 
  classes: Class[] = [];
  parents: Parent[] = [];

  @Input() modalId: string = '';
  @Input() isModalVisible: boolean = false;
  @Output() toggleModal = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private classService: ClassService,
    private parentService:ParentService,
    private studenService:StudentService
    ) {
    this.createForm();
  }
  ngOnInit() {
    this.getAllClasses();
    this.getAllParents();
  }
  closeModal() {
    this.toggleModal.emit();
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
    this.classService.getAllClasses().subscribe((data:Class[])=>{
      this.classes=data;
      console.log( 'All classes',this.classes);
    });
  }
  getAllParents(){
    this.parentService.getAllparents().subscribe((data:Parent[])=>{
      this.parents=data;
      console.log('All parents', this.parents);
    });
  }

  onSubmit() {
    if (!this.studentForm.valid) {
      console.log('Invalid form');
      return;
    }
  
    // Convert classId and parentId to numbers
    const formData = {
      ...this.studentForm.value,
      classId: Number(this.studentForm.value.classId),
      parentId: Number(this.studentForm.value.parentId)
    };
  
    this.studenService.createStudent(formData).subscribe((data: Student) => {
      console.log('Student created', data);
      this.toggleModal.emit();
      this.studentForm.reset();
    });
  }
  
}
