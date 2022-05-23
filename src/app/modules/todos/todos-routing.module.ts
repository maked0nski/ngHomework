import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodosComponent} from "./todos-components/todos/todos.component";
import {TodosResolver} from "./todos-services/todos.resolver";

const routes: Routes = [
  {path:'', component:TodosComponent, resolve:{todoData:TodosResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
