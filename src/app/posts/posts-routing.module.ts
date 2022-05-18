import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./post-components/posts/posts.component";
import {PostDetailsComponent} from "./post-components/post-details/post-details.component";

const routes: Routes = [
  {path: "", component: PostsComponent, children:[
      {path: ":id", component: PostDetailsComponent}
    ]},
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
