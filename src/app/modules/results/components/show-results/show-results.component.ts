// show-results.component.ts

import { Component, OnInit } from '@angular/core';
import { ExamsService } from '../../../../shared/services/exams.service';
import { ResultsService } from '../../../../shared/services/results.service';
import { Exams } from '../../../../shared/interfaces/exams.interface';
import { Result } from '../../../../shared/interfaces/reuslts.interface';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.scss']
})
export class ShowResultsComponent implements OnInit {
  exams: Exams[] = [];
  selectedExamId: number| null=null;
  examResults: Result[] = [];

  constructor(
    private examService: ExamsService,
    private resultsService: ResultsService
  ) { }

  ngOnInit() {
    this.getExams();
  }

  getExams() {
    this.examService.getAllExams().subscribe(exams => {
      this.exams = exams;
      if (exams.length > 0) {
        this.selectedExamId = exams[0].id; // Select the first exam by default
        this.getTheExamsResults(this.selectedExamId);
      }
    });
  }

  getTheExamsResults(examId: number) {
    this.resultsService.getStudentsAllResultForAnExam(examId).subscribe((data: Result[]) => {
      this.examResults = data;
    });
  }
}
