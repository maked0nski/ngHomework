import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from "./users-components/users/users.component";
import {UserDetailsComponent} from "./users-components/user-details/user-details.component";
import {UsersResolver} from "./users-services/users.resolver";
import {UserDetailsResolver} from "./users-services/user-details.resolver";

const routes: Routes = [
  {
    path: "", component: UsersComponent,
    resolve: {usersData: UsersResolver},
    children: [
      {path: ":id", component: UserDetailsComponent,
        resolve: {userData: UserDetailsResolver}}
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
export class UsersRoutingModule {
}
