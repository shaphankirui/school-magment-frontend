import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TeacherService } from '../../../../shared/services/teacher.service';
import { HotToastService } from '@ngneat/hot-toast';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.scss']
  
})
export class CreateTeacherComponent {
  @Input() modalId: string = '';
  @Input() isModalVisible: boolean = false;
  @Output() toggleModal = new EventEmitter<void>();

  teacherForm: FormGroup;

  constructor(
    private teacherService: TeacherService,
    private toast: HotToastService,
    private formBuilder: FormBuilder
  ) {
    this.teacherForm ! = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      otherName: [''],
      gender: [null, Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const passwordConfirm = formGroup.get('passwordConfirm')?.value;

    if (password !== passwordConfirm) {
      formGroup.get('passwordConfirm')?.setErrors({ mismatch: true });
    } else {
      formGroup.get('passwordConfirm')?.setErrors(null);
    }
  }

  closeModal() {
    this.toggleModal.emit();
  }

  onSubmit() {
    if (this.teacherForm.invalid) {
      this.toast.error('Please fill in all fields');
      console.log("Form is invalid", this.teacherForm.value);
      return;
    }

    if (this.teacherForm.get('password')!.value !== this.teacherForm.get('passwordConfirm')!.value) {
      // Passwords do not match
      this.toast.error('Passwords do not match');
      return;
    }

    console.log("Class to be created", this.teacherForm.value);
    this.teacherService.createTeacher(this.teacherForm.value).subscribe((data: any) => {
      console.log(data);
      this.toast.success('Class created successfully');
      this.closeModal();
      this.clearForm();
    });
  }

  clearForm() {
    this.teacherForm.reset({
      firstName: '',
      lastName: '',
      email: '',
      otherName: '',
      gender: null,
      password: '',
      passwordConfirm: ''
    });
  }
}
