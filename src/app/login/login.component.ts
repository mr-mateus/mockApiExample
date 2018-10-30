import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserFormLogin } from '../models/userFormLogin';
import { User } from '../models/user';
import { LoginService } from '../core/login.service';
import { MenuService } from '../core/menu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: UserFormLogin = new UserFormLogin();
  public serverError: boolean = false;
  constructor(private router: Router, private loginService: LoginService, private menuService: MenuService) { }

  ngOnInit() {
  }


  login(): void {
    this.loginService.login(this.user).subscribe((menu) => {
      this.router.navigate(['/mockApi']);
    }, erro => {
      this.serverError = true;
      console.error(erro);
    });
  }

}
//
