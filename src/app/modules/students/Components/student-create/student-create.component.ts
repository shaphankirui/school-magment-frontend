import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss']
})
export class StudentCreateComponent {
  studentForm!: FormGroup; // Add the ! to indicate that the property will be initialized later

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      otherName: [''],
      gender: ['', Validators.required],
      classId: ['', Validators.required],
      parentId: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      console.log('Form submitted:', this.studentForm.value);
      // Perform further actions with the form data
    }
  }
}