import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {Route, RouterModule} from "@angular/router";

import {AppComponent} from './components/app/app.component';
import {UsersComponent} from './components/user/users/users.component';
import {PostsComponent} from './components/post/posts/posts.component';
import {CommentComponent} from './components/comment/comment/comment.component';
import {CommentsComponent} from './components/comment/comments/comments.component';
import {UserComponent} from './components/user/user/user.component';
import {PostComponent} from './components/post/post/post.component';
import {UserDetailsComponent} from './components/user/user-details/user-details.component';
import {PostDetailsComponent} from './components/post/post-details/post-details.component';
import {LayoutComponent} from './components/layout/layout.component';
import {CommentDetailsComponent} from './components/comment/comment-details/comment-details.component';
import { NavigationComponent } from './components/navigation/navigation.component';

const routes: Route[] = [
  {
    path: "", component: LayoutComponent, children: [
      {path: "", redirectTo: "users", pathMatch: 'full'},
      {
        path: 'users', component: UsersComponent,
        children: [
          {path: ':id', component: UserDetailsComponent}
        ]
      },
      {
        path: 'posts', component: PostsComponent,
        children: [
          {path: ':id', component: PostDetailsComponent}
        ]
      },
      {
        path: 'comments', component: CommentsComponent,
        children: [
          {path: ':id', component: CommentDetailsComponent}
        ]
      },
    ]
  }
]


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    CommentComponent,
    CommentsComponent,
    UserComponent,
    PostComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    LayoutComponent,
    CommentDetailsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
