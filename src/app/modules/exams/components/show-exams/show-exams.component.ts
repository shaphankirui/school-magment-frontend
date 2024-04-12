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
    this.getAllData();
 
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
  getAllData() {
   

    this.classService.getAllClasses().subscribe((classes: Class[]) => {
      this.classes = classes;
    });

    this.courseService.getAllCourse().subscribe((courses: Course[]) => {
      this.courses = courses;
    });

    this.teacherService.getAllTeacher().subscribe((teachers: Teacher[]) => {
      this.teachers = teachers;
    });

    this.courseService.getAllAccadicTerm().subscribe((academicTerms: any[]) => {
      this.AccdemicTerms = academicTerms;
    });
  }

  getAllExams() {
    this.examsService.getAllExams().subscribe((data: Exams[]) => {
      this.exams = data;
      console.log('All classes', this.exams);
    })
  }
  getTeacherNameById(teacherId: number): string {
    const teacher = this.teachers.find((teacher: Teacher) => teacher.id === teacherId);
    if (teacher) {
        return teacher.firstName + ' ' + teacher.lastName;
    } else {
        return 'Unknown Teacher'; // Or any default value you prefer
    }
}

getCourseNameById(courseId: number): string {
  const course = this.courses.find((course: Course) => course.id === courseId);
  if (course) {
      return course.name;
  } else {
      return 'Unknown Course'; // Or any default value you prefer
  }
}

getClassNameById(classId: number): string {
  const classItem = this.classes.find((classItem: Class) => classItem.id === classId);
  if (classItem) {
      return classItem.name;
  } else {
      return 'Unknown Class'; // Or any default value you prefer
  }
}

getAcademicTermNameById(teacherId: number): string {
  const academicTerm = this.AccdemicTerms.find((term: any) => term.teacherId === teacherId);
  if (academicTerm) {
      return academicTerm.name;
  } else {
      return 'Unknown Academic Term'; // Or any default value you prefer
  }
}


 
}
