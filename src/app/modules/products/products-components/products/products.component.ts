import {Component, OnInit} from '@angular/core';

import {ProductInterface} from "../../interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: ProductInterface[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({productsData}) => this.products = productsData.products)
  }

}
