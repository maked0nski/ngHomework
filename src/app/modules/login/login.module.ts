import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./login-components/login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginService} from "./service/login.service";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers:[
    LoginService
  ]
})
export class LoginModule { }
