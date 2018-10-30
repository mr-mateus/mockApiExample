import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { environment } from '../../environments/environment';
import { Team } from '../models/team';

@Injectable()
export class TeamService {

  constructor(private httpClient: HttpClient) { }

  public getTeamEmployees(): Observable<Team> {
    return this.httpClient.get<Team>(`${environment.apiUrl}/teamEmployees`);
  }

}
