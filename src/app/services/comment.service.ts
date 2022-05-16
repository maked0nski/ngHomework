import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../constants";
import {IComment, ICommentDetails} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(urls.comments);
  }

  getById(id: string): Observable<ICommentDetails> {
    return this.httpClient.get<ICommentDetails>(`${urls.comments}/${id}`);
  }
}
