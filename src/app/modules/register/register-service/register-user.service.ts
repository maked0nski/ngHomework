import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUserAuth} from "../interface/user-auth";
import {Observable} from "rxjs";
import {urls} from "../../../constans";

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private httpClient: HttpClient) {
  }


  register(user: IUserAuth): Observable<IUserAuth> {
    return this.httpClient.post<IUserAuth>(urls.users_car, user)
  }

}
