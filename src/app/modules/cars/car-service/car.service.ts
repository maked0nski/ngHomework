import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ICar} from "../interface/car";
import {urls} from "../../../constans";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(urls.cars)
  }

  getByID(id: string): Observable<ICar> {
    return this.httpClient.get<ICar>(`${urls.cars}/${id}`);
  }

  deleteById(id: string) {
    return this.httpClient.delete(`${urls.cars}/${id}`)
  }

  updateById(id: string, car: Partial<ICar>): Observable<ICar> {
    return this.httpClient.patch<ICar>(`${urls.cars}/${id}`, car);
  }

  createCar(car: ICar): Observable<ICar> {
    return this.httpClient.post<ICar>(urls.cars, car);
  }
}
