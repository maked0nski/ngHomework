import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {CommentsDataService} from "./comments-data.service";
import {CommentsListInterface} from "../interface";

@Injectable({
  providedIn: 'root'
})
export class CommentsResolver implements Resolve<CommentsListInterface> {

  constructor(private commentsDataService: CommentsDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentsListInterface> | Promise<CommentsListInterface> | CommentsListInterface {
    return this.commentsDataService.getAll();
  }

}
