import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/shared/services/server.service';
import { Restaurants } from 'src/app/shared/models/models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  restaurants;

  api = environment.apiUrl;
  constructor(private service: ServerService, ) { }

  ngOnInit() {
    this.service.getRestaurants().then(res => {
      this.restaurants = res;
      console.log( this.restaurants);
    });
  }

}
