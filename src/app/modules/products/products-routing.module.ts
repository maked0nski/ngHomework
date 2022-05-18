import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductsComponent} from "./products-components/products/products.component";
import {ProductDetailsComponent} from "./products-components/product-details/product-details.component";

const routes: Routes = [
  {
    path: "", component: ProductsComponent, children: [
      {path: ":id", component: ProductDetailsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
