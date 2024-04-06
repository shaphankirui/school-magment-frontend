import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/student.interface';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Class } from '../interfaces/class.interface';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  constructor(
    private http: HttpClient,
  ) { }

 getAllClasses():Observable<Class[]> {
  const url = `${environment.apiRootUrl}/class`;
  return this.http.get<Class[]>(url);
 }
 createClass(classData: Class):Observable<Class> {
  const url = `${environment.apiRootUrl}/class`;
  return this.http.post<Class>(url, classData);
 }
 getClassById(id: number): Observable<Class> {
  const url = `${environment.apiRootUrl}/class/${id}`
  return this.http.get<Class>(url);
}

 updateClass(id:number, data:any): Observable<any> {
  return this.http.put(`${environment.apiRootUrl}/class/${id}`, data);
}

 
}
