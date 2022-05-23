import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../constans";
import {CommentInterface, CommentsListInterface} from "../interface";

@Injectable({
  providedIn: 'root'
})
export class CommentsDataService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<CommentsListInterface> {
    return this.httpClient.get<CommentsListInterface>(urls.comments);
  }

  getById(id: string): Observable<CommentInterface> {
    return this.httpClient.get<CommentInterface>(`${urls.comments}/${id}`);
  }
}
