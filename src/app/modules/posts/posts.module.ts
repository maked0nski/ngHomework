import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {PostsRoutingModule} from './posts-routing.module';
import {PostDataService} from "./post-service/post-data.service";
import {PostsComponent} from './post-components/posts/posts.component';
import {PostComponent} from './post-components/post/post.component';
import {PostDetailsComponent} from './post-components/post-details/post-details.component';
import {PostsResolver} from "./post-service/posts.resolver";
import {PostDetailsResolver} from "./post-service/post-details.resolver";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostDataService,
    PostsResolver,
    PostDetailsResolver
  ]
})
export class PostsModule {
}
