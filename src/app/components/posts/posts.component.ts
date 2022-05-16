import {Component, OnInit} from '@angular/core';

import {IPost} from "../../interface";
import {PostService} from "../../services";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getAll().subscribe(jsonPosts => this.posts = jsonPosts)
  }

}
