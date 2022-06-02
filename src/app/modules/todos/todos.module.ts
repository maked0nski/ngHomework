import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos-components/todos/todos.component';
import { TodoComponent } from './todos-components/todo/todo.component';
import {TodoDataService} from "./todos-services/todo-data.service";
import {TodosResolver} from "./todos-services/todos.resolver";
import {HttpModule} from "../../http.module";



@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    HttpModule
  ],
  providers:[
    TodoDataService,
    TodosResolver
  ]
})
export class TodosModule { }
