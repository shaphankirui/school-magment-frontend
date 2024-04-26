import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/student.interface';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<Student[]> {
    const url = `${environment.apiRootUrl}/student`;
    return this.http.get<Student[]>(url);
  }
  getAllStudentsWithBalance(): Observable<Student[]> {
    const url = `${environment.apiRootUrl}/student/fee-positive`;
    return this.http.get<Student[]>(url);
  }
  getAllStudentsWithNoBalance(): Observable<Student[]> {
    const url = `${environment.apiRootUrl}/student/fee-non-positive`;
    return this.http.get<Student[]>(url);
  }
  createStudent(student: Student): Observable<Student> {
    const url = `${environment.apiRootUrl}/student`;
    return this.http.post<Student>(url, student);
  }
  getStudentById(id: number): Observable<Student> {
    const url = `${environment.apiRootUrl}/student/${id}`;
    return this.http.get<Student>(url);
  }
  updateStudent(id: number, data: any): Observable<any> {
    return this.http.put(`${environment.apiRootUrl}/student/${id}`, data);
  }
}
