import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './register/register.component';
import { TeamComponent } from './home/team/team.component';
import { EmployeeComponent } from './home/employee/employee.component';

const appRoutes: Routes = [
  { path: '', redirectTo: "mockApi", pathMatch: "full" },
  {
    path: 'mockApi', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: "team", component: TeamComponent },
      { path: "employee", component: EmployeeComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
