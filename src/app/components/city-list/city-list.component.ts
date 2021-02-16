import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';
import { CitiesService } from 'src/app/services/cities.service';

import { Router } from '@angular/router';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  public cities = [];
  public city: any;

  constructor(private postService: CitiesService, private spinner: NgxSpinnerService, public router: Router) {
    this.city = new City();
  }

  ngOnInit(): void {
    this.getCities();
  }

  getCities() {
    this.spinner.show();
    this.postService.getall().subscribe(data => {
      this.cities = data;
      this.spinner.hide();
    }, err => {
      console.error("error >>>> ", err);
      this.spinner.hide();
    });
  }



  onGoToMap($event: any, city: any) {
    $event.stopPropagation();
    this.city.setLatitude(city.latitude);
    this.city.setLongitude(city.longitude);
    this.router.navigate(['map']);
  }

}
