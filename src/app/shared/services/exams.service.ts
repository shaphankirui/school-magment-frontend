import { Injectable } from '@angular/core';
import { Exams } from '../interfaces/exams.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';
import { Class } from '../interfaces/class.interface';
import { Result } from '../interfaces/reuslts.interface';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {

  constructor(
    private http: HttpClient,
  ) { }

 getAllExams():Observable<Exams[]> {
  const url = `${environment.apiRootUrl}/exams`;
  return this.http.get<Exams[]>(url);
 }
 createExam(classData: Exams):Observable<Exams> {
  const url = `${environment.apiRootUrl}/exams`;
  return this.http.post<Exams>(url, classData);
 }
 getExamById(id: number): Observable<Exams> {
  const url = `${environment.apiRootUrl}/exams/${id}`
  return this.http.get<Exams>(url);
}

 updateExam(id:number, data:any): Observable<any> {
  return this.http.put(`${environment.apiRootUrl}/exams/${id}`, data);
}
getStudentsDoingExams(id:number):Observable<any> {
  return this.http.get(`${environment.apiRootUrl}/exams/${id}/students`);
}
}
