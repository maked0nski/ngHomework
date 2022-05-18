import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../constans";
import {IUserDetails, UsersListInterface} from "../interface";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<UsersListInterface> {
    return this.httpClient.get<UsersListInterface>(urls.users);
  }

  getById(id: string): Observable<IUserDetails> {
    return this.httpClient.get<IUserDetails>(`${urls.users}/${id}`)
  }
}
