import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from "./post-components/posts/posts.component";
import {PostDetailsComponent} from "./post-components/post-details/post-details.component";
import {PostsResolver} from "./post-service/posts.resolver";
import {PostDetailsResolver} from "./post-service/post-details.resolver";

const routes: Routes = [
  {
    path: "", component: PostsComponent,
    resolve: {postsData: PostsResolver},
    children: [
      {
        path: ":id", component: PostDetailsComponent,
        resolve: {postDetails: PostDetailsResolver}
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostsRoutingModule {
}
