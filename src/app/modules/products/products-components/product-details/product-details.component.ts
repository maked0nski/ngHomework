import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ProductInterface} from "../../interface";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: ProductInterface;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({productData}) => this.product = productData)
  }

}
