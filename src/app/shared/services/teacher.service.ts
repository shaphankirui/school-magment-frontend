import { Injectable } from '@angular/core';
import { Teacher } from '../interfaces/teacher.interface';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
    private http: HttpClient

  ) { }

  getAllTeacher():Observable <Teacher[]> {
    const url = `${environment.apiRootUrl}/teachers`;
    return this.http.get<Teacher[]>(url);
  }
  createTeacher(teacher: Teacher): Observable<Teacher> {
    const url = `${environment.apiRootUrl}/teachers`;
    return this.http.post<Teacher>(url, teacher);
  }
  getTeacherById(id: number): Observable<Teacher> {
    const url = `${environment.apiRootUrl}/teachers/${id}`
    return this.http.get<Teacher>(url);
  }
  updateTeacher(id:number, data:any): Observable<any> {
    return this.http.put(`${environment.apiRootUrl}/teachers/${id}`, data);
  }
}
