import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AlertModule.forRoot(),
    RouterModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
