import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../interfaces/courses.interface';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(
    private http: HttpClient,
  ) { }

 getAllCourse():Observable<Course[]> {
  const url = `${environment.apiRootUrl}/courses`;
  return this.http.get<Course[]>(url);
 }
 createCourse(courseData: Course):Observable<Course> {
  const url = `${environment.apiRootUrl}/courses`;
  return this.http.post<Course>(url, courseData);
 }
 getCourseById(id: number): Observable<Course> {
  const url = `${environment.apiRootUrl}/courses/${id}`
  return this.http.get<Course>(url);
}

 updateCourse(id:number, data:any): Observable<any> {
  return this.http.put(`${environment.apiRootUrl}/courses/${id}`, data);
}
}
