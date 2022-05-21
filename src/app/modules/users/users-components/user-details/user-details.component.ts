import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUserDetails} from "../../interface";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUserDetails;

  constructor(
    private activatedRoute: ActivatedRoute,
    // private router: Router,
    // private userDataService: UserDataService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({userData}) => this.userDetails= userData);

    // this.activatedRoute.params.subscribe(({id}) => {
    //   let state = this.router.getCurrentNavigation()?.extras.state?.['user'] as IUserDetails;
    //
    //   if (state) {
    //     this.userDetails = state;
    //   } else {
    //     this.userDataService.getById(id).subscribe(value => this.userDetails = value);
    //   }
    // })
  }

}
