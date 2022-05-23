import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {PostInterface} from "../../interface";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: PostInterface;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({postDetails}) => this.post = postDetails)
  }

}
