import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class TeacherCourseService {
  private apiUrl = environment.apiRootUrl;

  constructor(private http: HttpClient) {}

  getAllTeacherCourses(): Observable<
    { teacherId: number; courseId: number }[]
  > {
    return this.http.get<{ teacherId: number; courseId: number }[]>(
      `${this.apiUrl}/teachers-courses`
    );
  }

  createTeacherCourse(data: {
    teacherId: number;
    courseId: number;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/teachers-courses`, data);
  }

  deleteTeacherCourse(teacherId: number, courseId: number): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}/teachers-courses/${teacherId}/${courseId}`
    );
  }
}
