import { ServerService } from 'src/app/shared/services/server.service';
import { Component, OnInit } from '@angular/core';
import { Positions, Restaurants, BookingTable, Tables } from 'src/app/shared/models/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  images = [
    {path: 'https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg', isShow: true},
    {path: 'https://wallpaperbrowse.com/media/images/img_fjords.jpg', isShow: false},
    // tslint:disable-next-line:max-line-length
    {path: 'https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg', isShow: false}
  ];
  restaurant: Restaurants;
  restaurantId: string;
  bookingTable: BookingTable;
  selectedTable: string;
  public style: object = {};
  constructor(private route: ActivatedRoute, private server: ServerService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
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
    this.server.getRestaurantTables(this.restaurantId).then(res => {
      this.restaurant = res;
      this.style = {
        left: `${this.restaurant.area.left}px`,
        top: `${this.restaurant.area.top}px`,
        width: `${this.restaurant.area.width}px`,
        height: `${this.restaurant.area.height}px`
      };
      console.log(res);
    });
  }


  next(index) {

    if (this.images.length === index) {
      this.images[index - 1].isShow = false;
      this.images[0].isShow = true;
    } else {
      this.images[index - 1].isShow = false;
      this.images[index].isShow = true;
    }

  }
  prev(index) {
    if (index === 0) {
      this.images[0].isShow = false;
      this.images[this.images.length - 1].isShow = true;
    } else {
      this.images[index].isShow = false;
      this.images[index - 1].isShow = true;
    }
  }
  onChanged(increased, index) {

  }

  acceptBooking() {
    this.bookingTable.tableId = this.selectedTable;
    this.server.setBookingTable(this.bookingTable).then(r => {
      alert(r.status);
    });
    console.log(this.bookingTable);
  }
  selectTable(table: Tables) {
    this.restaurant.tables.map(r => {
      if (r !== table) {
        r.isSelected = false;
      }
    });
    table.isSelected = !table.isSelected;

    this.selectedTable = table.id;

  }

}
