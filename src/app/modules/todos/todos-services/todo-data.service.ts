import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TodosListInterface} from "../interface";
import {urls} from "../../../constans";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient :HttpClient) { }

  getAll():Observable<TodosListInterface>{
    return this.httpClient.get<TodosListInterface>(urls.todos);
  }
}
