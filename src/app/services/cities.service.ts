import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { }

  getall() {

    return this.http.get(environment.apiUrl + environment.api.city).pipe(map((data: any) => {

      var cities = [];

      for (var _city of data) {
        var city = new City();
        city.setData(_city);
        cities.push(_city);
      }
      return cities;

    }), catchError(err => {
      return throwError(err);
    }));

  }
}
