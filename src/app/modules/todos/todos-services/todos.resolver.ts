import { Injectable } from '@angular/core';
import {
   Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import {TodosListInterface} from "../interface";
import {TodoDataService} from "./todo-data.service";

@Injectable({
  providedIn: 'root'
})
export class TodosResolver implements Resolve<TodosListInterface> {

  constructor(private todoDataService:TodoDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TodosListInterface> | Promise<TodosListInterface> | TodosListInterface {
    return this.todoDataService.getAll();
  }

}
