import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {ProductsDataService} from "../../products-services/products-data.service";
import {ProductInterface} from "../../interface";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:ProductInterface;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productsDataService: ProductsDataService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      let state = this.router.getCurrentNavigation()?.extras?.state?.['product'] as ProductInterface;

      if (state){
        this.product = state;
      }else {
        this.productsDataService.getByID(id).subscribe(value => this.product = value);
      }
    })
  }

}
