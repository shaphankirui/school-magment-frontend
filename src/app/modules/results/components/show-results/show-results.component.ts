// show-results.component.ts

import { Component, OnInit } from '@angular/core';
import { ExamsService } from '../../../../shared/services/exams.service';
import { ResultsService } from '../../../../shared/services/results.service';
import { Exams } from '../../../../shared/interfaces/exams.interface';
import { Result } from '../../../../shared/interfaces/reuslts.interface';
import { Student } from '../../../../shared/interfaces/student.interface';
import { StudentService } from '../../../../shared/services/student.service';
import { Class } from '../../../../shared/interfaces/class.interface';
import { ClassService } from '../../../../shared/services/class.service';
import { Teacher } from '../../../../shared/interfaces/teacher.interface';
import { TeacherService } from '../../../../shared/services/teacher.service';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.scss'],
})
export class ShowResultsComponent implements OnInit {
  exams: Exams[] = [];
  selectedExamId: number | null = null;
  selectedClassId: number | null = null;
  classes: Class[] = [];
  examResults: Result[] = [];
  students: Student[] = [];
  teacher: Teacher = {
    firstName: '',
    lastName: '',
    email: '',
    otherName: '',
    gender: '',
    id: 0,
    passowrd: '',
  };

  constructor(
    private examService: ExamsService,
    private resultsService: ResultsService,
    private studentsService: StudentService,
    private classService: ClassService,
    private teacherService: TeacherService
  ) {}

  ngOnInit() {
    this.getExams();
    this.getAllStudents();
    this.getAllClasses();
    this.getTeacherByToken();
    this.getAllExams();
  }
  getTeacherByToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.teacherService.getTeacherByToken(token).subscribe((teacher) => {
        this.teacher = teacher;
        console.log('teacher', teacher);
      });
    }
  }

  getExams() {
    this.examService.getAllExams().subscribe((exams) => {
      this.exams = exams.filter((exam) => exam.teacherId === this.teacher.id);
      if (this.exams.length > 0) {
        this.selectedExamId = this.exams[0].id; // Select the first exam by default
        this.getTheExamsResults(this.selectedExamId);
      }
    });
  }
  getAllStudents() {
    this.studentsService.getAllStudents().subscribe((students) => {
      this.students = students;
    });
  }
  getAllClasses() {
    this.classService.getAllClasses().subscribe((classes) => {
      this.classes = classes;
    });
  }
  getStudentNameById(studentId: number): string {
    const studentName = this.students.find(
      (classItem: Student) => classItem.id === studentId
    );
    if (studentName) {
      return studentName.firstName + ' ' + studentName.lastName;
    } else {
      return 'Unknown Student'; // Or any default value you prefer
    }
  }
  getExamNameById(examId: number): string {
    const studentName = this.exams.find(
      (examItem: Exams) => examItem.id === examId
    );
    if (studentName) {
      return studentName.name;
    } else {
      return 'Unknown Student'; // Or any default value you prefer
    }
  }
  getClassNameById(examId: number): string {
    const examItem = this.exams.find(
      (examItem: Exams) => examItem.id === examId
    );
    if (examItem) {
      const classItem = this.classes.find(
        (classItem: Class) => classItem.id === examItem.classId
      );
      if (classItem) {
        return classItem.name;
      } else {
        return 'Unknown Class'; // Or any default value you prefer
      }
    } else {
      return 'Unknown Class'; // Or any default value you prefer
    }
  }

  calculatePercentage(score: number, examId: number): any {
    const exam = this.exams.find((examItem: Exams) => examItem.id === examId);
    if (exam) {
      const percentage = (score / exam.outOf) * 100;
      const roundedPercentage = Math.round(percentage); // Round off to nearest whole number
      return roundedPercentage;
    } else {
      return 'Calculating...'; // Or any default value you prefer
    }
  }

  getTheExamsResults(examId: number) {
    this.resultsService
      .getStudentsAllResultForAnExam(examId)
      .subscribe((data: Result[]) => {
        this.examResults = data;
      });
  }
  getTheClassExam(classId: number) {
    console.log('passed class Id', classId);

    // Convert classId to number if it's a string
    const classIdNumber =
      typeof classId === 'string' ? parseInt(classId) : classId;

    this.examService.getAllExams().subscribe((data: Exams[]) => {
      // this.exams = data.filter((exam: Exams) => exam.classId === classIdNumber);
      this.exams = data;
      this.examResults = [];
    });
  }
  getAllExams() {
    this.examService.getAllExams().subscribe((data: Exams[]) => {
      // this.exams = data.filter((exam: Exams) => exam.classId === classIdNumber);
      this.exams = data;
      console.log('all exams', this.exams);
      // this.examResults = [];
    });
  }
}
