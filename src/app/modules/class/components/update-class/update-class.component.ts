import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { ClassService } from '../../../../shared/services/class.service';
import { Class } from '../../../../shared/interfaces/class.interface';

@Component({
  selector: 'app-update-class',
  templateUrl: './update-class.component.html',
  styleUrl: './update-class.component.scss'
})
export class UpdateClassComponent implements OnChanges {
  @Input() modalId: string = '';
  @Input() classId: number | null = null;
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
  ngOnChanges(changes: SimpleChanges) {
    if (changes['classId'] && !changes['classId'].firstChange) {
      this.getClassById(this.classId!);
    }
  }
  closeModal() {
    this.toggleModal.emit();
  }
  getClassById(id: number) {
    this.classService.getClassById(id).subscribe((data: Class) => {
      this.classDetails = {
        name: data.name,
        classTeacher: data.classTeacher,
        classPrefect: data.classPrefect,
      }
    })
  }
  onSubmit(){
    console.log("Calss to be created",this.classDetails);
    this.classService.updateClass(this.classId!,this.classDetails).subscribe((data: any) => {
      console.log(data);
      this.toast.success('Class Update successfully');
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
