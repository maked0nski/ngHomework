import {CommentInterface} from "./comment.interface";

export interface CommentsListInterface {
  comments: CommentInterface[],
  total: number,
  skip: number,
  limit: number,
}
