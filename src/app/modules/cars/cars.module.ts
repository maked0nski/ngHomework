import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {CarsRoutingModule} from './cars-routing.module';
import {CarsComponent} from './cars-components/cars/cars.component';
import {CarComponent} from './cars-components/car/car.component';
import {CarService} from "./car-service/car.service";


@NgModule({
  declarations: [
    CarsComponent,
    CarComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    HttpClientModule
  ],
  providers: [
    CarService
  ]
})
export class CarsModule {
}
