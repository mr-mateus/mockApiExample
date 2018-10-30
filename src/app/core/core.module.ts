import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamService } from './team.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuService } from './menu.service';
import { LoginService } from './login.service';
import { RegisterService } from './register.service';
import { EmployeeService } from './employee.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [TeamService, MenuService, LoginService, RegisterService, EmployeeService]
})
export class CoreModule { }
