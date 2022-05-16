import {IComment} from "../interfaces";

export interface ICommentDetails extends IComment {
  postId: number,
  email: string,
  body: string
}
