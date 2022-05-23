import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from "./users-components/users/users.component";
import {UserComponent} from './users-components/user/user.component';
import {UserDetailsComponent} from './users-components/user-details/user-details.component';
import {UserDataService, UserDetailsResolver, UsersResolver} from "./users-services";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserDataService,
    UsersResolver,
    UserDetailsResolver
  ]
})
export class UsersModule {
}
