import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductsComponent} from "./products-components/products/products.component";
import {ProductDetailsComponent} from "./products-components/product-details/product-details.component";
import {ProductsResolver} from "./products-services/products.resolver";
import {ProductDetailsResolver} from "./products-services/product-details.resolver";

const routes: Routes = [
  {
    path: "", component: ProductsComponent,
    resolve: {productsData: ProductsResolver},
    children: [
      {
        path: ":id", component: ProductDetailsComponent,
        resolve: {productData: ProductDetailsResolver},
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
