import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { TeamModule } from './team/team.module';
import { EmployeeModule } from './employee/employee.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TeamModule,
    EmployeeModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
