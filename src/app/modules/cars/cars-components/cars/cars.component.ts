import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {ICar} from "../../interface/car";
import {CarService} from "../../car-service/car.service";
import {regEx} from "../../../../constans";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  carsGroup: FormGroup;
  cars: ICar[];
  carForUpdate: ICar | null;

  constructor(private carService: CarService) {
    this._createForm()
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => this.cars = value);
  }

  _createForm(): void {
    this.carsGroup = new FormGroup({
      'model': new FormControl(null, [Validators.required, Validators.pattern(regEx.model), Validators.maxLength(20)]),
      'year': new FormControl(1990, [Validators.required, Validators.minLength(1990), Validators.maxLength(new Date().getFullYear())]),
      'price': new FormControl(0, [Validators.required, Validators.minLength(0), Validators.maxLength(1000000)])
    });
  }

  save() {
    if (!this.carForUpdate) {
      this.carService.create(this.carsGroup.value).subscribe(value => {
        this.cars.push(value);

      })
    } else {
      this.carService.updateById(this.carForUpdate.id, this.carsGroup.value).subscribe(value => {
        let car1 = this.cars.find(f => f.id === this.carForUpdate?.id);
        Object.assign(car1, value);
        this.carForUpdate = null;
      })
    }
    this.carsGroup.reset();
  }

  update(car: ICar): void {
    this.carForUpdate = car;
    this.carsGroup.setValue({model: car.model, year: car.year, price: car.price})
  }

  delete(id: number): void {
    this.carService.deleteById(id).subscribe(() => {
      let index = this.cars.findIndex(car => car.id === id);
      this.cars.splice(index, 1)
    })
  }
}
