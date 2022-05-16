import {Component, OnInit} from '@angular/core';

import {IUser} from "../../interface";
import {UserService} from "../../services";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(jsonUsers => this.users = jsonUsers)
  }
}
