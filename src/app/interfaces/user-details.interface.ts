import {IUser, IAddress, ICompany} from "../interfaces";

export interface IUserDetails extends IUser {
  username: string;
  email: string;
  phone: string;
  website: string;
  address: IAddress;
  company: ICompany
}
