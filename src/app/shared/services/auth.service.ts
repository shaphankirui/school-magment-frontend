import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = `${environment.apiRootUrl}/teachers/signin`;
  apiUrlManagment = `${environment.apiRootUrl}/management/signin`;


  constructor( private http: HttpClient) { }

  login(data: any) {
    return this.http.post(this.apiUrl, data);
  }
  loginManagment(data: any) {
    return this.http.post(this.apiUrlManagment, data);
  }

}
