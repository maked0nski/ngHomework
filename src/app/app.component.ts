import {Component, OnInit} from '@angular/core';
import {LoginService} from "./modules/login/service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.loginService.isAuthUser()){
      this.router.navigate(['cars'])
    }
  }

}
