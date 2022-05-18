import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../../constans/urls";

import {PostInterface, PostsListInterface} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<PostsListInterface>{
    return this.httpClient.get<PostsListInterface>(urls.posts)
  }

  getById(id:string):Observable<PostInterface>{
    return this.httpClient.get<PostInterface>(`${urls.posts}/${id}`);
  }
}

