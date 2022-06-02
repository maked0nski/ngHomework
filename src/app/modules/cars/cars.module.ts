import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import {CarsRoutingModule} from './cars-routing.module';
import {CarsComponent} from './cars-components/cars/cars.component';
import {CarComponent} from './cars-components/car/car.component';
import {CarService} from "./car-service/car.service";
import {HttpModule} from "../../http.module";



@NgModule({
  declarations: [
    CarsComponent,
    CarComponent
  ],
    imports: [
        CommonModule,
        CarsRoutingModule,
        HttpModule,
        ReactiveFormsModule
    ],
  providers: [
    CarService
  ]
})
export class CarsModule {
}
