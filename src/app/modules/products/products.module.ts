import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products-components/products/products.component';
import {ProductComponent} from './products-components/product/product.component';
import {ProductDetailsComponent} from './products-components/product-details/product-details.component';
import {ProductsDataService} from "./products-services/products-data.service";
import {ProductsResolver} from "./products-services/products.resolver";
import {ProductDetailsResolver} from "./products-services/product-details.resolver";


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductsDataService,
    ProductsResolver,
    ProductDetailsResolver
  ]
})
export class ProductsModule {
}
