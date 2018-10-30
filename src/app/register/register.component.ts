import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../core/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public userFormRegister: UserFormRegister;
  public serverMessage: string = "";
  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  createAccount() {
    this.registerService.createAccount(this.userFormRegister).subscribe(response => {
      console.log("OPAAAA");
      this.router.navigate(['/login']);
    }, serverError => {
      console.log(serverError.error.message);
      this.serverMessage = serverError.error.message;
    });
  }

}
