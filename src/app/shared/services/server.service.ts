import { BookingTable, Menu } from './../models/models';
import { UserData, Restaurants, Tables } from 'src/app/shared/models/models';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable()
export class ServerService extends BaseService {
	public api = environment.apiUrl;
	private httpHeaders = new HttpHeaders({
		Accept: 'application/json',
		'Content-Type': 'application/x-www-form-urlencoded'
	});

	constructor(http: HttpClient) {
		super(http);
	}
	getToken(name: string, password: string): any {
		const body = new HttpParams().set('userName', name).set('password', password);
		const uri = 'auth/login';
		return this.http
			.post(this.api + uri, body.toString(), {
				headers: this.httpHeaders
			})
			.toPromise()
			.then((res) => res);
	}
	signUp(user: UserData): any {
		const body = new HttpParams()
			.set('email', user.userName)
			.set('password', user.password)
			.set('firstName', user.firstName)
			.set('lastName', user.lastName)
			.set('location', user.location);
		const uri = 'accounts';
		return this.http
			.post(this.api + uri, body.toString(), {
				headers: this.httpHeaders
			})
			.toPromise()
			.then((res) => res);
	}

	getUserInfo(id) {
		const url = `Users/GetUserInfo?UserId=${id}`;
		return this.get(this.api + url, {});
	}
	getCity() {
		const url = 'Restaurants/GetCities';
		return this.get(this.api + url, {});
	}
	getCountries() {
		const url = 'Restaurants/GetCountries';
		return this.get(this.api + url, {});
	}

	// tslint:disable-next-line:max-line-length
	setRestaurant(restaurant: Restaurants, userId: string) {
		const uri = 'Restinfo/SetRestaurant';
		const workDay = JSON.stringify(restaurant.workDay);
		const formData: FormData = new FormData();
		formData.append('Name', restaurant.name);
		formData.append('Addres', restaurant.addres);
		formData.append('Number', restaurant.number.toString());
		formData.append('Kitchen', restaurant.kitchen);
		formData.append('Delivery', restaurant.delivery.toString());
		formData.append('AvgCheck', restaurant.avgCheck.toString());
		formData.append('Seats', restaurant.seats.toString());
		formData.append('Description', restaurant.description);
		formData.append('cityId', restaurant.cityId.toString());
		formData.append('WorkDay', workDay);
		formData.append('FileToUpload', restaurant.avatar, restaurant.avatar.name);
		formData.append('tables', JSON.stringify(restaurant.tables));
		formData.append('area', JSON.stringify(restaurant.area));
		formData.append('menu', JSON.stringify(restaurant.menu));
		formData.append('userId', userId);

		return this.post(this.api + uri, formData);
	}

	getRestaurants() {
		const url = 'Restaurants/GetRestaurants';
		return this.get(this.api + url, {});
	}

	getRestaurantTables(id: string) {
		const url = `Restinfo/GetRestaurant?restarauntId=${id}`;
		return this.get(this.api + url, {});
	}

	setBookingTable(table: BookingTable) {
		const uri = 'Booking/BookingTable';
		const formData: FormData = new FormData();
		formData.append('date', table.date);
		formData.append('time', table.time);
		formData.append('comments', table.comments);
		formData.append('tableId', table.tableId);
		formData.append('userId', table.userId);

		return this.post(this.api + uri, formData);
	}
	getDishType() {
		const url = 'Restinfo/GetDishType';
		return this.get(this.api + url, {});
	}
	getRestaurantForWebView(id) {
		const url = `Restaurants/GetRestaurant?restarauntId=${id}`;
		return this.get(this.api + url, {});
	}

	getUserRestaurant(userId: string) {
		const url = `Restinfo/GetUserRestaurant?userId=${userId}`;
		return this.get(this.api + url, {});
	}
	getUserRestaurantMenu(userId: string) {
		const url = `Restinfo/GetUserRestaurantMenu?userId=${userId}`;
		return this.get(this.api + url, {});
	}

	uploadDishFile(file: File, dishId: string) {
		let url = 'Restinfo/UploadDishFile';
		const formData: FormData = new FormData();
		formData.append('dishId', dishId);
		formData.append('dishFile', file, file.name);
		return this.post(this.api + url, formData);
	}

	setDishMenu(dish: Menu) {
		let url = 'Restinfo/SetMenu';
		return this.post(this.api + url, dish);
	}

	getBookedTable(restarauntId: string) {
		const url = `Booking/GetBookedTables?restarauntId=${restarauntId}`;
		return this.get(this.api + url, {});
	}
}
