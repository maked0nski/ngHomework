import {IUserDetails} from "../interfaces";

export interface UsersListInterface{
  users: IUserDetails[],
  total: number,
  skip: number,
  limit: number
}
