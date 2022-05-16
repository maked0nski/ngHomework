import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {CommentService} from "../../../services";
import {ICommentDetails} from "../../../interfaces";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: ICommentDetails;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      let state = this.router.getCurrentNavigation()?.extras?.state?.['comment'] as ICommentDetails;


      if (state) {
        this.commentDetails = state;
      } else {
        this.commentService.getById(id).subscribe(value => this.commentDetails = value);
      }
    })
  }

}
