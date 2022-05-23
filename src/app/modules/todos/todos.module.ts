import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos-components/todos/todos.component';
import { TodoComponent } from './todos-components/todo/todo.component';
import {TodoDataService} from "./todos-services/todo-data.service";
import {TodosResolver} from "./todos-services/todos.resolver";



@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    HttpClientModule
  ],
  providers:[
    TodoDataService,
    TodosResolver
  ]
})
export class TodosModule { }
