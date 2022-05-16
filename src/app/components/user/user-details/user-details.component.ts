import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {UserService} from "../../../services";
import {IUserDetails} from "../../../interfaces";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUserDetails;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {

      let state = this.router.getCurrentNavigation()?.extras?.state?.['user'] as IUserDetails;

      if (state) {
        this.userDetails = state;
      } else {
        this.userService.getByID(id).subscribe(data => this.userDetails = data);
      }
    })
  }
}
