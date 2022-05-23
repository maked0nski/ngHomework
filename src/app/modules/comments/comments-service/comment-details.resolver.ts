import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {CommentInterface} from "../interface";
import {CommentsDataService} from "./comments-data.service";

@Injectable({
  providedIn: 'root'
})
export class CommentDetailsResolver implements Resolve<CommentInterface> {

  constructor(private commentsDataService: CommentsDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentInterface> | Promise<CommentInterface> | CommentInterface {
    return this.commentsDataService.getById(route.params["id"]);
  }

}
