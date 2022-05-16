import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IPostDetails} from "../../../interfaces";
import {PostService} from "../../../services";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetail: IPostDetails

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private postService: PostService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      let state = this.router.getCurrentNavigation()?.extras?.state?.['post'] as IPostDetails;

      if (state) {
        this.postDetail = state;
      } else {
        this.postService.getById(id).subscribe(value => this.postDetail = value);
      }
    });
  }

}
