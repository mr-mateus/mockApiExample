import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Employee } from '../models/employee';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) { }

  public getEmployees() {
    return this.http.get(`${environment.apiUrl}/employees`);
  }

  saveEmployee(employee: Employee): any {
    return this.http.post(`${environment.apiUrl}/employees`, employee);
  }

  getEmployeeById(id: number): any {
    return this.http.get(`${environment.apiUrl}/employees/${id}`);
  }

  updateEmployee(employee: Employee): any {
    return this.http.put(`${environment.apiUrl}/employees/${employee.id}`, employee);
  }

  deleteEmployee(id: number): any {
    return this.http.delete(`${environment.apiUrl}/employees/${id}`);
  }
}
