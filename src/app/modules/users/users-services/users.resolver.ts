import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {UsersListInterface} from "../interface";
import {UserDataService} from "./user-data.service";

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<UsersListInterface> {
  constructor(private userDataService: UserDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UsersListInterface> | Promise<UsersListInterface> | UsersListInterface {
    return this.userDataService.getAll();
  }

}
