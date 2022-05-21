import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import {IUserDetails} from "../interface";
import {UserDataService} from "./user-data.service";

@Injectable({
  providedIn: 'root'
})
export class UserDetailsResolver implements Resolve<IUserDetails> {

  constructor(private userDataService:UserDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUserDetails> | Promise<IUserDetails> | IUserDetails {
    let id = route.params['id'];
    return this.userDataService.getById(id);
  }

}
