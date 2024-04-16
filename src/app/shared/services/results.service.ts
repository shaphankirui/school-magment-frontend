import { Injectable } from '@angular/core';
import { Result } from '../interfaces/reuslts.interface';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(
    private http: HttpClient,
  ) { }

 getAllResult():Observable<Result[]> {
  const url = `${environment.apiRootUrl}/results`;
  return this.http.get<Result[]>(url);
 }
 createResult(classData: Result):Observable<Result> {
  const url = `${environment.apiRootUrl}/results`;
  return this.http.post<Result>(url, classData);
 }
 getResultById(id: number): Observable<Result> {
  const url = `${environment.apiRootUrl}/results/${id}`
  return this.http.get<Result>(url);
}

 updateResult(id:number, data:any): Observable<any> {
  return this.http.put(`${environment.apiRootUrl}/results/${id}`, data);
}
getStudentsAllResult(id:number):Observable<any> {
  return this.http.get(`${environment.apiRootUrl}/results/students/${id}`);
}
getStudentsAllResultForAnExam(id:number):Observable<any> {
  return this.http.get(`${environment.apiRootUrl}/results/exam/${id}`);
}
}
