import {Component, OnInit} from '@angular/core';

import {ProductsDataService} from "../../products-services/products-data.service";
import {ProductInterface} from "../../interface";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: ProductInterface[];

  constructor(private productsDataService: ProductsDataService) {
  }

  ngOnInit(): void {
    this.productsDataService.getAll().subscribe(({products}) => this.products = products);
  }

}
