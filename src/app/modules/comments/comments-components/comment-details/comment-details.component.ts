import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {CommentInterface} from "../../interface";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: CommentInterface;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({commentData}) => this.commentDetails = commentData)
  }

}
