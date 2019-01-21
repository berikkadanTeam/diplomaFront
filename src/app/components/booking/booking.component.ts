import { ServerService } from 'src/app/shared/services/server.service';
import { Component, OnInit } from '@angular/core';
import { Positions, AddObject } from 'src/app/shared/models/models';
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
  trappedBoxes: AddObject [] = [];
  restaurantId: string;
  constructor(private route: ActivatedRoute, private server: ServerService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.restaurantId = params.id;
    });
    this.server.getRestaurantTables(this.restaurantId).then(res => {
      this.trappedBoxes = res;
      // console.log(res)
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

  }
  selectedTable(tableNumber) {
    console.log(tableNumber);
  }

}
