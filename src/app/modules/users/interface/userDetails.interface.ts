import {IUser} from "./user.interface";
import {IHair} from "./hair.interface";
import {IAddress} from "./address.interface";
import {IBank} from "./bank.interface";
import {ICompany} from "./company.interface";

export interface IUserDetails extends IUser{
  maidenName: string,
  gender: string,
  age: number,
  email: string,
  phone: string,
  username: string,
  password: string,
  birthDate: string,
  image: string,
  bloodGroup: string,
  height: number,
  weight: number,
  eyeColor: string,
  hair: IHair,
  domain: string,
  ip: string,
  address: IAddress,
  macAddress: string,
  university: string,
  bank: IBank,
  company: ICompany,
  ein: string,
  ssn: string,
  userAgent: string,
}
