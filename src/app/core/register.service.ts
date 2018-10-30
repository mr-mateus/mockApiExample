import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }

  createAccount(userFormRegister: UserFormRegister): Observable<any> {
    return this.http.post(`${environment.apiUrl}/register`, userFormRegister);
  }

}
