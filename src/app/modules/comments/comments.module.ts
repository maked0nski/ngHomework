import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {CommentsRoutingModule} from './comments-routing.module';
import {CommentsComponent} from './comments-components/comments/comments.component';
import {CommentComponent} from './comments-components/comment/comment.component';
import {CommentsDataService} from "./comments-service/comments-data.service";
import {CommentsResolver} from "./comments-service/comments.resolver";
import {CommentDetailsResolver} from "./comments-service/comment-details.resolver";
import {CommentDetailsComponent} from "./comments-components/comment-details/comment-details.component";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommentsDataService,
    CommentsResolver,
    CommentDetailsResolver
  ]
})
export class CommentsModule {
}
