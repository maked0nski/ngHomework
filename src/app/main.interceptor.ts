import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginService} from "./modules/login/service/login.service";

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor(private loginService :LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isAuthUser = this.loginService.isAuthUser();
    if(isAuthUser){
      request = this.addToken(request, this.loginService.getToken())
      console.log(request);
    }
    return next.handle(request);
  }



  addToken(request:HttpRequest<any>, token:string):HttpRequest<any>{
    return request.clone({
      setHeaders:{Authorization: `Bearer ${token}`}
    })
  }

}
