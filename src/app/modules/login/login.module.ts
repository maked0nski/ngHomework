import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import { LoginRoutingModule } from './login-routing.module';
import {LoginComponent} from "./login-components/login/login.component";
import {LoginService} from "./service/login.service";
import {HttpModule} from "../../http.module";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  providers:[
    LoginService
  ]
})
export class LoginModule { }
