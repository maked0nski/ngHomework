import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TodoInterfaces} from "../../interface";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: TodoInterfaces[];

  constructor(private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({todoData}) => this.todos = todoData.todos)
  }

}
