import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../constans";
import {ProductInterface, ProductsListInterface} from "../interface";

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
