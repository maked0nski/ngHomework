import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {ProductInterface} from "../interface";
import {ProductsDataService} from "./products-data.service";

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsResolver implements Resolve<ProductInterface> {

  constructor(private productsDataService: ProductsDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductInterface> | Promise<ProductInterface> | ProductInterface {
    let id = route.params['id'];
    return this.productsDataService.getByID(id);
  }

}
