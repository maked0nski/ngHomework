import {Component, Input, OnInit} from '@angular/core';

import {ProductInterface} from "../../interface";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: ProductInterface;

  constructor() {
  }

  ngOnInit(): void {
  }

}
