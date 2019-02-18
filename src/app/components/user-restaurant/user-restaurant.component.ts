import { ServerService } from 'src/app/shared/services/server.service';
import { Component, OnInit } from '@angular/core';
import { UserData, Restaurants } from 'src/app/shared/models/models';

@Component({
	selector: 'app-user-restaurant',
	templateUrl: './user-restaurant.component.html',
	styleUrls: [ './user-restaurant.component.scss' ]
})
export class UserRestaurantComponent implements OnInit {
	user: UserData;
  restaurant: Restaurants;
	constructor(private server: ServerService) {}

	ngOnInit() {
		const user = localStorage.getItem('user');
    this.user = JSON.parse(user);
    this.restaurant = {
      id: '',
      name: '',
      addres: '',
      number: 0,
      kitchen: '',
      delivery: true,
      avgCheck: 0,
      seats: 0,
      description: '',
      cityId: 0,
      workDay: [],
      avatar: null,
      tables: []
    };
		this.server.getUserRestaurant(this.user.id).then((r) => {
			this.restaurant = r;
    });
	}
}
