import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExamsService } from '../../../../shared/services/exams.service';
import { HotToastService } from '@ngneat/hot-toast';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Class } from '../../../../shared/interfaces/class.interface';
import { Course } from '../../../../shared/interfaces/courses.interface';
import { Teacher } from '../../../../shared/interfaces/teacher.interface';
import { ClassService } from '../../../../shared/services/class.service';
import { CourseService } from '../../../../shared/services/course.service';
import { TeacherService } from '../../../../shared/services/teacher.service';

@Component({
  selector: 'app-create-exams',
  templateUrl: './create-exams.component.html',
  styleUrls: ['./create-exams.component.scss']
})
export class CreateExamsComponent implements OnInit {
  classes:Class[] = [];
  courses:Course[] = [];
  teachers:Teacher[] = [];
  AccdemicTerms:any[] = [];

  @Input() modalId: string = '';
  @Input() isModalVisible: boolean = false;
  @Output() toggleModal = new EventEmitter<void>();
  examForm: FormGroup;

  constructor(
    private examsService: ExamsService,
    private toast: HotToastService,
    private formBuilder: FormBuilder,
    private classService: ClassService,
    private courseService: CourseService,
    private teacherService: TeacherService,
  ) {
    const initialDate = new Date(2024, 3, 12); // Year, Month (0-based), Day
    this.examForm = this.formBuilder.group({
      name: ['', Validators.required],
      date: [this.getFormattedDate(initialDate), Validators.required],
      courseId: [null, Validators.required],
      teacherId: [null, Validators.required],
      accademicTermId: [null, Validators.required],
      classId: [null, Validators.required],
      passMark: [null, Validators.required],
      out_of: [null, Validators.required]
    });
  }
  ngOnInit() {
    this.getClasses();
    this.getTeachers();
    this.getCourses();
    this.getAccademicTerms();
  }

  getClasses() {
    this.classService.getAllClasses().subscribe((data: Class[]) => {
      this.classes = data;
    });
  }
  getTeachers() {
    this.teacherService.getAllTeacher().subscribe((data: Teacher[]) => {
      this.teachers = data;
    });
  }
  getCourses() {
    this.courseService.getAllCourse().subscribe((data: Course[]) => {
      this.courses = data;
    });
  }
  getAccademicTerms() {
    this.courseService.getAllAccadicTerm().subscribe((data: any[]) => {
      this.AccdemicTerms = data;
    });
  }

  closeModal() {
    this.toggleModal.emit();
  }

  onSubmit() {
    if (this.examForm.invalid) {
      return;
    }
  
    // Convert string values to numbers
    const examData = {
      ...this.examForm.value,
      courseId: +this.examForm.value.courseId,
      teacherId: +this.examForm.value.teacherId,
      classId: +this.examForm.value.classId,
      accademicTermId: +this.examForm.value.accademicTermId
    };
  
    console.log("Exam to be created", examData);
  
    this.examsService.createExam(examData).subscribe(
      (data: any) => {
        console.log(data);
        this.toast.success('Exam created successfully');
        this.closeModal();
        this.clearForm();
      },
      (error) => {
        console.error('Error creating exam:', error);
        this.toast.error('Failed to create exam');
      }
    );
  }
  

  clearForm() {
    this.examForm.reset();
  }

  // Function to get the formatted date
  getFormattedDate(date: Date): string {
    return date.toISOString().slice(0, 16) + ':00Z';
  }
  
}
