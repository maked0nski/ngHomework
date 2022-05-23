import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {PostsListInterface} from "../interface";
import {PostDataService} from "./post-data.service";

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<PostsListInterface> {
  constructor(private postDataService: PostDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostsListInterface> | Promise<PostsListInterface> | PostsListInterface {
    return this.postDataService.getAll();
  }

}
