import {ProductInterface} from "./index";

export interface ProductsListInterface{
  products: ProductInterface[],
  total: number,
  skip: number,
  limit: number,
}
