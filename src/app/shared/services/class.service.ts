import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/student.interface';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Class, SubClass } from '../interfaces/class.interface';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  constructor(private http: HttpClient) {}

  getAllClasses(): Observable<Class[]> {
    const url = `${environment.apiRootUrl}/class`;
    return this.http.get<Class[]>(url);
  }
  getAllSubClasses(): Observable<SubClass[]> {
    const url = `${environment.apiRootUrl}/sub-classes`;
    return this.http.get<SubClass[]>(url);
  }
  createClass(classData: Class): Observable<Class> {
    const url = `${environment.apiRootUrl}/class`;
    return this.http.post<Class>(url, classData);
  }
  createSubClass(classData: SubClass): Observable<SubClass> {
    const url = `${environment.apiRootUrl}/sub-classes`;
    return this.http.post<SubClass>(url, classData);
  }
  getClassById(id: number): Observable<Class> {
    const url = `${environment.apiRootUrl}/class/${id}`;
    return this.http.get<Class>(url);
  }
  getSubClassById(id: number): Observable<SubClass> {
    const url = `${environment.apiRootUrl}/sub-classes/${id}`;
    return this.http.get<SubClass>(url);
  }

  updateClass(id: number, data: any): Observable<any> {
    return this.http.put(`${environment.apiRootUrl}/class/${id}`, data);
  }
  updateSubClass(id: number, data: any): Observable<any> {
    return this.http.put(`${environment.apiRootUrl}/sub-classes/${id}`, data);
  }
}
