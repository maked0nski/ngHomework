import {Component, OnInit} from '@angular/core';

import {PostDataService} from "../../post-service/post-data.service";
import {PostInterface} from "../../interface";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: PostInterface[];

  constructor(private postDataService: PostDataService) {
  }

  ngOnInit(): void {
    this.postDataService.getAll().subscribe(({posts}) => this.posts = posts);
  }

}
