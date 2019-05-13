import { showToast } from 'lodash';
import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/shared/services/server.service';
import { ActivatedRoute } from '@angular/router';
import { Restaurants, BookingTable, Tables } from 'src/app/shared/models/models';

declare var Android: any;
@Component({
  selector: 'app-webview-booking',
  templateUrl: './webview-booking.component.html',
  styleUrls: ['./webview-booking.component.scss']
})
export class WebviewBookingComponent implements OnInit {


  constructor(private route: ActivatedRoute, private server: ServerService) { }
  restaurant: Restaurants;
  bookingTable: BookingTable;
  public style: object = {};
  restaurantId: string;
  selectedTable: string;
  user;
  bookedTale: string;


  ngOnInit() {
    localStorage.setItem('token', 'null');
    this.route.params.subscribe(params => {
      this.restaurantId = params.id;
    });
    this.restaurant = {
      id: '',
      name: '',
      addres: '',
      number: '',
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
    this.server.getRestaurantForWebView(this.restaurantId).then(res => {
      this.restaurant = res;
      this.style = {
        left: `${this.restaurant.area.leftArea}px`,
        top: `${this.restaurant.area.topArea}px`,
        width: `${this.restaurant.area.widthArea}px`,
        height: `${this.restaurant.area.heightArea}px`
      };
    });
    const user = localStorage.getItem('user');
    this.user = JSON.parse(user);
  }
  onChanged(increased, index) {

  }
  webkit;
  selectTable(table: Tables) {
    Android.showToast(table.id);
    this.bookedTale = table.name;
    this.restaurant.tables.map(r => {
      if (r !== table) {
        r.isSelected = false;
      }
    });
    table.isSelected = !table.isSelected;

    this.selectedTable = table.id;

  }
  // alertClick() {
  //   alert(((window as any).Android == null).toString());
  // }
}
