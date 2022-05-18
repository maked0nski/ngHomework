import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {PostDataService} from "../../post-service/post-data.service";
import {PostInterface} from "../../../interfaces";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: PostInterface;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private postDataService: PostDataService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      let state = this.router.getCurrentNavigation()?.extras?.state?.['post'] as PostInterface;

      if (state) {
        this.post = state;
      } else {
        this.postDataService.getById(id).subscribe(post => this.post = post);
      }
    })
  }

}
