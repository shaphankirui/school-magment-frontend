import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parent } from '../interfaces/parent.interface';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(
    private http: HttpClient,
  ) { }
  getAllparents():Observable <Parent[]> {
    const url = `${environment.apiRootUrl}/parent`;
    return this.http.get<Parent[]>(url);
  }
}
