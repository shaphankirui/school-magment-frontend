// add-results.component.ts

import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../../shared/services/student.service';
import { ExamsService } from '../../../../shared/services/exams.service';
import { Exams } from '../../../../shared/interfaces/exams.interface';
import { Student } from '../../../../shared/interfaces/student.interface';
import { ResultsService } from '../../../../shared/services/results.service';
import { Result } from '../../../../shared/interfaces/reuslts.interface';
import { HotToastService } from '@ngneat/hot-toast';
import { TeacherService } from '../../../../shared/services/teacher.service';
import { Teacher } from '../../../../shared/interfaces/teacher.interface';
import { ClassService } from '../../../../shared/services/class.service';
import { Class } from '../../../../shared/interfaces/class.interface';

@Component({
  selector: 'app-add-results',
  templateUrl: './add-results.component.html',
  styleUrls: ['./add-results.component.scss'],
})
export class AddResultsComponent implements OnInit {
  examId: number = 2;
  exams: Exams[] = [];
  students: Student[] = [];
  selectedClassId: number | null = null;
  classes: Class[] = [];
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
    private resultService: ResultsService,
    private examService: ExamsService,
    private toast: HotToastService,
    private teacherService: TeacherService,
    private classService: ClassService
  ) {}

  ngOnInit() {
    this.getExams();
    this.getTeacherByToken();
    this.getAllClasses();
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
  getAllClasses() {
    this.classService.getAllClasses().subscribe((classes) => {
      this.classes = classes;
    });
  }

  getExams() {
    this.examService.getAllExams().subscribe((exams) => {
      this.exams = exams.filter((exam) => exam.teacherId === this.teacher.id);
      console.log('exams', this.exams);
      // Load students for default examId
      this.getStudentsForExam(this.examId);
    });
  }

  getStudentsForExam(examId: number) {
    console.log('getStudentsForExam', examId);
    this.examService.getStudentsDoingExams(examId).subscribe((students) => {
      this.students = students;
    });
  }

  onExamChange() {
    // Fetch students for the newly selected exam
    this.getStudentsForExam(this.examId);
  }
  onClassChange(): void {
    // Fetch exams based on the selected class ID
    this.examService.getAllExams().subscribe((exams) => {
      this.exams = exams.filter(
        (exam) =>
          exam.teacherId === this.teacher.id &&
          exam.classId === this.selectedClassId
      );
      console.log('exams', this.exams);
      // Load students for default examId
      this.getStudentsForExam(this.examId);
    });
  }

  submitResults() {
    // Initialize a counter to track successful results submission
    let successCounter = 0;

    // Iterate over the students array and send a POST request for each student to add their result
    this.students.forEach((student) => {
      const resultDto: Result = {
        studentId: student.id,
        score: student.score, // Assuming the student object has a 'score' property
        examId: +this.examId, // Convert examId to a number using the unary plus operator
      };

      // Send a POST request to add the result for the current student
      this.resultService.createResult(resultDto).subscribe(
        () => {
          // Increment the success counter
          successCounter++;

          // Check if all results have been successfully submitted
          if (successCounter === this.students.length) {
            // Display success message and clear results
            this.toast.success('All results added successfully');
            this.clearResults();
          }
        },
        (error) => {
          this.toast.error('Error adding result');
        }
      );
    });
  }

  clearResults() {
    // Clear the students array
    this.students = [];
  }
}
