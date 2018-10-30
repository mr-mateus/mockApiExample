import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { ModalModule, AlertModule } from '../../../../node_modules/ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [EmployeeComponent, EmployeeEditComponent],
  entryComponents: [EmployeeEditComponent]
})
export class EmployeeModule { }
