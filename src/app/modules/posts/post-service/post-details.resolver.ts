import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {PostInterface} from "../interface";
import {PostDataService} from "./post-data.service";

@Injectable({
  providedIn: 'root'
})
export class PostDetailsResolver implements Resolve<PostInterface> {

  constructor(private postDataService: PostDataService,) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostInterface> | Promise<PostInterface> | PostInterface {
    return this.postDataService.getById(route.params['id']);
  }

}
