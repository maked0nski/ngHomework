import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AuthenticationGuard} from "./service/authentication.guard";

let routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', loadChildren: () => import('./modules').then(m => m.LoginModule)},
      {path: 'register', loadChildren: () => import('./modules').then(m => m.RegisterModule)},
      {path: 'cars', loadChildren: () => import('./modules').then(m => m.CarsModule)},
      {path: 'users', loadChildren: () => import('./modules').then(m => m.UsersModule)},
      {path: 'posts', loadChildren: () => import('./modules').then(m => m.PostsModule)},
      {path: 'products', loadChildren: () => import('./modules').then(m => m.ProductsModule)},
      {path: 'comments', loadChildren: () => import('./modules').then(m => m.CommentsModule), canActivate:[AuthenticationGuard]},
      {path: 'todos', loadChildren: () => import('./modules').then(m => m.TodosModule), canActivate:[AuthenticationGuard]},
    ],

  },
  {path: '**', component: NotFoundComponent}
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
