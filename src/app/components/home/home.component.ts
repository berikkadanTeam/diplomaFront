import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/shared/services/server.service';
import { Restaurants } from 'src/app/shared/models/models';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  restaurants;

  api = environment.apiUrl;
<<<<<<< HEAD
  constructor(private service: ServerService, private route: ActivatedRoute ) { }
=======
  constructor(private service: ServerService, private route: ActivatedRoute, ) { }
>>>>>>> cc48323ec340abdae0174e56fdd52efe64e31db4

  ngOnInit() {
    this.service.getRestaurants().then(res => {
      this.restaurants = res;
      console.log( this.restaurants);
    });
    this.route.params.subscribe(params => {
      console.log(params);
    });
  }

}
