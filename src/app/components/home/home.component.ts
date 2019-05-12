import { Promotion, UserData } from './../../shared/models/models';
import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/shared/services/server.service';
import { Restaurants } from 'src/app/shared/models/models';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  restaurants: Restaurants[] = [];
  page: number = 1;
  api = environment.apiUrl;

  promotions: Promotion[] = [];

  user: UserData;

  currentRole: boolean;

  constructor(private service: ServerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.service.getRestaurants().then(res => {
      this.restaurants = res;
    });

    this.service.getPromotions().then(res => {
      this.promotions = res;
    });

    const user = localStorage.getItem('user');
    this.user = JSON.parse(user);

    if (this.user.roles.some(e => e === "Admin")) {
      this.currentRole = true;
      }

  }

  booking(restaurant: Restaurants) {
    const token = localStorage.getItem('token');
    if (!token) {
      return this.router.navigate(['/sign']);
    }
    if (token) {
      return this.router.navigate(['/restaurant', restaurant.id, 'booking']);
    }
  }

}
