import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

let routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path: 'users', loadChildren: () => import('./modules').then(m => m.UsersModule)},
      {path: 'posts', loadChildren: () => import('./modules').then(m => m.PostsModule)},
      {path: 'products', loadChildren: () => import('./modules').then(m => m.ProductsModule)},
      {path: 'comments', loadChildren: () => import('./modules').then(m => m.CommentsModule)},
      {path: 'todos', loadChildren: () => import('./modules').then(m => m.TodosModule)},
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})

export class AppRoutingModule {
}
