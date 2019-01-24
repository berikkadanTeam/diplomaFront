import { BookingTable } from './../models/models';
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
    const body = new HttpParams()
      .set('userName', name)
      .set('password', password);
    const uri = 'auth/login';
    return this.http.post(this.api + uri, body.toString(), {
        headers: this.httpHeaders
      }).toPromise().then(res => res);
  }
  signUp(user: UserData): any {
    const body = new HttpParams()
    .set('email', user.username)
    .set('password', user.password)
    .set('firstName', user.firstName)
    .set('lastName', user.lastName)
    .set('location', user.location);
  const uri = 'accounts';
  return this.http.post(this.api + uri, body.toString(), {
      headers: this.httpHeaders
    }).toPromise().then(res => res);
  }

  getUserInfo(id) {
    const url =  `Users/GetUserInfo?UserId=${id}`;
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
  setRestaurant(restaurant: Restaurants) {
    const uri = 'Restaurants/SetRestaurant';
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

    return this.post(this.api + uri, formData);
  }

  getRestaurants() {
    const url = 'Restaurants/GetRestaurants';
    return this.get(this.api + url, {});
  }

  getRestaurantTables(id: string) {
    const url =  `Restaurants/GetRestaurant?restarauntId=${id}`;
    return this.get(this.api + url, {});
  }

  setBookingTable(table: BookingTable) {
    const uri = 'Restaurants/Booking';
    const formData: FormData = new FormData();
    formData.append('date', table.date);
    formData.append('time', table.time);
    formData.append('comments', table.comments);
    formData.append('tableId', table.tableId);
    formData.append('userId', table.userId);

    return this.post(this.api + uri, formData);
  }
}
