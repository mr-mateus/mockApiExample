import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserFormLogin } from '../models/userFormLogin';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { Menu } from '../models/menu';
export const LOGIN_URL: string = `${environment.apiUrl}/login`;
@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(userFormLogin: UserFormLogin): Observable<User> {
    return this.http.post<User>(LOGIN_URL, userFormLogin);
  }

}
