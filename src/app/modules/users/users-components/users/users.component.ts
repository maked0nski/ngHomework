import {Component, OnInit} from '@angular/core';

import {UserDataService} from "../../users-services/user-data.service";
import {IUser} from "../../interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[]

  constructor(private userDataService: UserDataService) {
  }

  ngOnInit(): void {
    this.userDataService.getAll().subscribe(({users}) => this.users = users);
  }

}
