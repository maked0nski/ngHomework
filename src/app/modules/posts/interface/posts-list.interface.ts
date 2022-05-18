import {PostInterface} from "./post.interface";

export interface PostsListInterface{
  posts: PostInterface[],
  total: number,
  skip: number,
  limit: number,
}
