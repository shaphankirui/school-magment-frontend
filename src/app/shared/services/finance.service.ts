import { Injectable } from '@angular/core';
import { Finance } from '../interfaces/finance.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FinanceService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Finance[]> {
    const url = `${environment.apiRootUrl}/fee-payments`;
    return this.http.get<Finance[]>(url);
  }
  create(classData: Finance): Observable<Finance> {
    const url = `${environment.apiRootUrl}/fee-payments`;
    return this.http.post<Finance>(url, classData);
  }
  getById(id: number): Observable<Finance> {
    const url = `${environment.apiRootUrl}/fee-payments/${id}`;
    return this.http.get<Finance>(url);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put(`${environment.apiRootUrl}/fee-payments/${id}`, data);
  }
}
