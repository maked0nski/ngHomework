import {IPost} from "../interfaces";

export interface IPostDetails extends IPost{
  userId: number,
  body: string
}
