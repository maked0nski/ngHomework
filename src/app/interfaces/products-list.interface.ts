import {ProductInterface} from "../interfaces";

export interface ProductsListInterface{
  products: ProductInterface[],
  total: number,
  skip: number,
  limit: number,
}
