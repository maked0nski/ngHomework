import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ProductInterface, ProductsListInterface} from "../../interfaces";
import {urls} from "../../constans/urls";

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<ProductsListInterface> {
    return this.httpClient.get<ProductsListInterface>(urls.products);
  }

  getByID(id: string): Observable<ProductInterface> {
    return this.httpClient.get<ProductInterface>(`${urls.products}/${id}`);
  }
}
