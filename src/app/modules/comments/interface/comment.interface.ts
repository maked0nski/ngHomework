import {IUser} from "../../users/interface";

export interface CommentInterface {
  id: number,
  body: string,
  postId: number,
  user: IUser,
}
