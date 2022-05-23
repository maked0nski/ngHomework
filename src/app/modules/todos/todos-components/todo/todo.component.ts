import {Component, Input, OnInit} from '@angular/core';
import {TodoInterfaces} from "../../interface";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  todo:TodoInterfaces;

  constructor() { }

  ngOnInit(): void {
  }

}
