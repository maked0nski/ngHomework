import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {ProductsListInterface} from "../interface";
import {ProductsDataService} from "./products-data.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<ProductsListInterface> {

  constructor(private productsDataService: ProductsDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductsListInterface> | Promise<ProductsListInterface> | ProductsListInterface {
    return this.productsDataService.getAll();
  }

}
