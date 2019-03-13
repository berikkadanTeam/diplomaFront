import { ServerService } from 'src/app/shared/services/server.service';
import { Component, OnInit } from '@angular/core';
import { Positions, Restaurants, BookingTable, Tables, UserData } from 'src/app/shared/models/models';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-booking',
	templateUrl: './booking.component.html',
	styleUrls: [ './booking.component.scss' ]
})
export class BookingComponent implements OnInit {
	user: UserData = null;
	restaurant: Restaurants;
	restaurantId: string;

	api = environment.apiUrl;

	constructor(private route: ActivatedRoute, private server: ServerService) {}

	ngOnInit() {
		const user = localStorage.getItem('user');
		this.user = JSON.parse(user);
		this.route.params.subscribe((params) => {
			this.restaurantId = params.id;
		});

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
      tables: [],
		};

		this.server.getRestaurantTables(this.restaurantId).then((res) => {
			this.restaurant = res;
			this.restaurant.images[0].isShow = true;
			console.log(this.restaurant);
		});
	}

	next(index) {
		if (this.restaurant.images.length === index) {
			this.restaurant.images[index - 1].isShow = false;
			this.restaurant.images[0].isShow = true;
		} else {
			this.restaurant.images[index - 1].isShow = false;
			this.restaurant.images[index].isShow = true;
		}
	}
	prev(index) {
		if (index === 0) {
			this.restaurant.images[0].isShow = false;
			this.restaurant.images[this.restaurant.images.length - 1].isShow = true;
		} else {
			this.restaurant.images[index].isShow = false;
			this.restaurant.images[index - 1].isShow = true;
		}
	}
}
