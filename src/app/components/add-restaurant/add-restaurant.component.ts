import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/shared/services/server.service';
import { Cities, Countries } from 'src/app/shared/models/models';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit {

  cities: Cities [] = [];
  countries: Countries [] = [];
  constructor(private service: ServerService) { }

  ngOnInit() {
    this.service.getCity().then(res => {
      this.cities = res;
    });
    this.service.getCountries().then(res => {
      this.countries = res;
    });
  }

}
