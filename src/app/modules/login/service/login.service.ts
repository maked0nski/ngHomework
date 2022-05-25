import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUserAuth} from "../../register/interface/user-auth";
import {Observable} from "rxjs";
import {IToken} from "../interface/token";
import {urls} from "../../../constans";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private accessTokenKey = 'access'

  constructor(private httpClient: HttpClient) {
  }

  login(user: IUserAuth): Observable<IToken> {
    return this.httpClient.post<IToken>(urls.auth, user)
  }

  getToken(): string {
    return localStorage.getItem(this.accessTokenKey) as string;
  }

  setToken(token: IToken): void {
    localStorage.setItem(this.accessTokenKey, token.access)
  }

  isAuthUser(): boolean {
    return !!localStorage.getItem(this.accessTokenKey)
  }
}
