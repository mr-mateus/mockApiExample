import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { LoginModule } from './login/login.module';
import { GuardsModule } from './guards/guards.module';
import { RegisterModule } from './register/register.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    routing,
    HomeModule,
    LoginModule,
    RegisterModule,
    GuardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
