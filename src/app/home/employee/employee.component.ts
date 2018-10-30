import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from '../../../../node_modules/ngx-bootstrap';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../core/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees: Array<Employee> = new Array<Employee>();
  private bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((employees: Array<Employee>) => {
      this.employees = employees;
    }, error => {
      console.log(error);
    });
    this.modalService.onHide.subscribe((opa) => {
      this.employeeService.getEmployees().subscribe((employees: Array<Employee>) => {
        this.employees = employees;
      }, error => {
        console.log(error);
      });
    });
  }

  createEmployee() {
    this.bsModalRef = this.modalService.show(EmployeeEditComponent, {
      initialState: {
        title: "Incluir funcionário"
      }
    });
  }

  updateEmployee(id: number) {
    this.employeeService.getEmployeeById(id).subscribe(employeeResponse => {
      this.bsModalRef = this.modalService.show(EmployeeEditComponent, {
        initialState: {
          title: "Editar funcionário",
          employee: employeeResponse
        }
      });
    });
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(employeeResponse => {
      this.employeeService.getEmployees().subscribe((employees: Array<Employee>) => {
        this.employees = employees;
      });
    });
  }

}
