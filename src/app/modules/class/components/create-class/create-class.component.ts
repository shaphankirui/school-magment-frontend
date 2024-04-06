import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClassService } from '../../../../shared/services/class.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrl: './create-class.component.scss'
})
export class CreateClassComponent {
  @Input() modalId: string = '';
  @Input() isModalVisible: boolean = false;
  @Output() toggleModal = new EventEmitter<void>();

  classDetails: any = {
    name: '',
    classTeacher: '',
    classPrefect: '',
  }

  constructor(
    private classService: ClassService,
    private toast: HotToastService,
  ) { }
  closeModal() {
    this.toggleModal.emit();
  }
  onSubmit(){
    console.log("Calss to be created",this.classDetails);
    this.classService.createClass(this.classDetails).subscribe((data: any) => {
      console.log(data);
      this.toast.success('Class created successfully');
      this.closeModal();
      this.clearForm();
  })
}
clearForm() {
  this.classDetails = {
    name: '',
    classTeacher: '',
    classPrefect: '',
  }
}

}
