import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {LoginService} from "../../service/login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private loginService: LoginService, private router: Router) {
    this._createForm()
  }


  ngOnInit(): void {
  }

  _createForm(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    })
  }

  submitLogin(): void {
    this.loginService.login(this.loginForm.getRawValue()).subscribe(value => {
      this.loginService.setToken(value);
      this.router.navigate(['cars']);
    })
  }


}
