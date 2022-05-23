import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentsComponent} from "./comments-components/comments/comments.component";
import {CommentsResolver} from "./comments-service/comments.resolver";
import {CommentDetailsComponent} from "./comments-components/comment-details/comment-details.component";
import {CommentDetailsResolver} from "./comments-service/comment-details.resolver";

const routes: Routes = [
  {
    path: '', component: CommentsComponent, resolve: {commentsData:CommentsResolver}, children: [
      {path: ':id', component: CommentDetailsComponent, resolve: {commentData:CommentDetailsResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule {
}
