import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Employee } from '../../../models/employee';
import { EmployeeService } from '../../../core/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  title: string;
  public employee: Employee = {
  };
  constructor(public bsModalRef: BsModalRef, private employeeService: EmployeeService, private modalService: BsModalService) { }

  ngOnInit() { }

  cancel() {
    this.bsModalRef.hide();
  }

  public saveEmployee() {
    if (this.employee.id) {
      this.employeeService.updateEmployee(this.employee).subscribe((employee) => {
        this.bsModalRef.hide();
      }, error => { });
    } else {
      this.employeeService.saveEmployee(this.employee).subscribe((employee) => {
        this.bsModalRef.hide();
      }, error => { });
    }

  }
}
