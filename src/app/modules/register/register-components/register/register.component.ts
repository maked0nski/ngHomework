import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

import {RegisterUserService} from "../../register-service/register-user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  userNameError: string;

  constructor(private registerUserService: RegisterUserService, private router: Router) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.registerForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      'confirm_password': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)])
    }, [this._checkPassword])
  }

  submitRegister() {
    let rawValue = this.registerForm.getRawValue();
    delete rawValue.confirm_password;
    this.registerUserService.register(rawValue).subscribe(value => {
        this.router.navigate(['login'])
      },
      e => {
        e.error.username[0] = this.userNameError
      }
    );
  }

  _checkPassword(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password');
    const confirm_password = form.get('confirm_password');
    return password?.value === confirm_password?.value ? null : {notSame: true};
  }
}
