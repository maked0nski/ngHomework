import {IUserDetails} from "./userDetails.interface";

export interface UsersListInterface{
  users: IUserDetails[],
  total: number,
  skip: number,
  limit: number
}
