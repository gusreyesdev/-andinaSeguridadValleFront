import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public city: any;
  public title = 'AndinaSeguridadValle';
  public lat: number;
  public lng: number;
  public zoom = 15;

  constructor() {
    this.city = new City();
    this.lat = parseInt(this.city.getlatitude());
    this.lng = parseInt(this.city.getLongitude());
  }

  ngOnInit(): void {
  }

}
