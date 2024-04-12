import { Component, EventEmitter, Output } from '@angular/core';
import { ExamsService } from '../../../../shared/services/exams.service';
import { Exams } from '../../../../shared/interfaces/exams.interface';
import { Class } from '../../../../shared/interfaces/class.interface';
import { Course } from '../../../../shared/interfaces/courses.interface';
import { Teacher } from '../../../../shared/interfaces/teacher.interface';
import { ClassService } from '../../../../shared/services/class.service';
import { CourseService } from '../../../../shared/services/course.service';
import { TeacherService } from '../../../../shared/services/teacher.service';

@Component({
  selector: 'app-show-exams',
  templateUrl: './show-exams.component.html',
  styleUrl: './show-exams.component.scss'
})
export class ShowExamsComponent {
  exams: Exams [] = [];
  examsId: number | null = null;
  classes:Class[] = [];
  courses:Course[] = [];
  teachers:Teacher[] = [];
  AccdemicTerms:any[] = [];

  constructor(
      private examsService: ExamsService,
      private classService: ClassService,
      private courseService: CourseService,
      private teacherService: TeacherService,
  ) { }
  ngOnInit(): void {
    this.getAllExams();
    this.getClassNameById(1);
    this.getTeacherNameById(1);
    this.getCourseNameById(1);
    this.getAcademicTermNameById(1);
  }
  isModalVisible: boolean = false;
  isEditModalVisible: boolean = false;
  examId: number | null = null;
  @Output() editStudent = new EventEmitter<number>(); // Event emitter for edit


  toggleModal() {
    this.isModalVisible = !this.isModalVisible;
  }
  toggleEditModal(id: number | null) {
    this.examId = id;
    this.isEditModalVisible = !this.isEditModalVisible;
    if (id !== null) {
      this.editStudent.emit(id); // Emit event with student ID
    }
    this.getAllExams();
  }

  getAllExams() {
    this.examsService.getAllExams().subscribe((data: Exams[]) => {
      this.exams = data;
      console.log('All classes', this.exams);
    })
  }
  getTeacherNameById(teacherId: number){
    this.teacherService.getTeacherById(teacherId).subscribe((data: Teacher) => {
      console.log(data);
      return data.firstName +'' + data.lastName;
    })
}
getCourseNameById(courseId: number){
    this.courseService.getCourseById(courseId).subscribe((data: Course) => {
      console.log(data);
      return data.name ;
    })
}
getClassNameById(classId: number){
    this.classService.getClassById(classId).subscribe((data: Class) => {
      console.log(data);
      return data.name ;
    })
}
getAcademicTermNameById(teacherId: number){
    this.courseService.getTearmyId(teacherId).subscribe((data: any) => {
      console.log(data);
      return data.name;
    })
}

 
}
