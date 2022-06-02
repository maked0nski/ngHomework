import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';

import {LoginService} from "./modules/login/service/login.service";
import {Router} from "@angular/router";

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService, private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const isAuthUser = this.loginService.isAuthUser();

    if (isAuthUser) {
      request = this.addToken(request, this.loginService.getToken())
    }

    return next.handle(request).pipe(
      catchError((res: HttpErrorResponse) => {
        if (res && res.error && res.status === 401) {
          this.loginService.deleteToken();
          this.router.navigate(['login'])
        }
        return throwError(() => new Error('Token invalid or expired'))
      })
    );
  }


  addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {Authorization: `Bearer ${token}`}
    })
  }


}
