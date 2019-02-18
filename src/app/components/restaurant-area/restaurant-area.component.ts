import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/shared/services/server.service';
import { ActivatedRoute } from '@angular/router';
import { Restaurants, BookingTable, Tables, DishType, UserData, Menu } from 'src/app/shared/models/models';

@Component({
	selector: 'app-restaurant-area',
	templateUrl: './restaurant-area.component.html',
	styleUrls: [ './restaurant-area.component.scss' ]
})
export class RestaurantAreaComponent implements OnInit {
	constructor(private route: ActivatedRoute, private service: ServerService) {}
	restaurant: Restaurants;
	bookingTable: BookingTable;
	public style: object = {};
	restaurantId: string;
	selectedTable: string;
	user: UserData;
	bookedTale: string;
	dishType: DishType[] = [];
	menu: Menu[] = [];
	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.restaurantId = params.id;
		});
		this.service.getDishType().then((r) => {
			this.dishType = r;
			this.dishType[0].showDishes = true;
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
			tables: []
		};
		this.bookingTable = {
			id: '',
			date: '',
			time: '',
			comments: '',
			tableId: '',
			userId: null
		};
		this.service.getRestaurantTables(this.restaurantId).then((res) => {
			this.restaurant = res;
			this.menu = this.restaurant.menu.filter((r) => r.typeId === 1);
			this.style = {
				left: `${this.restaurant.area.left}px`,
				top: `${this.restaurant.area.top}px`,
				width: `${this.restaurant.area.width}px`,
				height: `${this.restaurant.area.height}px`
			};
		});
		const user = localStorage.getItem('user');
		this.user = JSON.parse(user);
	}

	onChanged(increased, index) {}

	acceptBooking() {
		this.bookingTable.userId = this.user.id;
		this.bookingTable.tableId = this.selectedTable;
		this.service.setBookingTable(this.bookingTable).then((r) => {
			alert(r.status);
		});
	}
	selectTable(table: Tables) {
		this.bookedTale = table.name;
		this.restaurant.tables.map((r) => {
			if (r !== table) {
				r.isSelected = false;
			}
		});
		table.isSelected = !table.isSelected;

		this.selectedTable = table.id;

	}
	dishForType(dishId: number) {
		this.menu = this.restaurant.menu.filter((r) => r.typeId === dishId);
	}
}
interface WebAppInterface {
	showToast(toast: string): any;
}
