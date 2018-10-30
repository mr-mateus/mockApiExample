import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { AlertModule } from '../../../node_modules/ngx-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    AlertModule.forRoot(),
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [LoginComponent]

})
export class LoginModule { }
