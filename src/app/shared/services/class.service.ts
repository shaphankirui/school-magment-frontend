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

 
}
