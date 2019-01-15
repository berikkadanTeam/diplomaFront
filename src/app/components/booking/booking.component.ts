import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
interface Position {
  name: string;
  x: number;
  y: number;
}
interface AddTypes {
  name: string;
  objects: AddObject [];
}
interface AddObject {
  name: string;
  width: number;
  height: number;
  countPerson: number;
  tableNumber: number;
}
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
  trappedBoxes: Position [] = [
    {
          name: '8 мест',
          x: 100,
          y: 5
        },
        {
          name: '5 мест',
          x: 100,
          y: 40
        }
  ];

  addObjects: AddTypes [] = [];
  constructor() { }

  ngOnInit() {
    this.addObjects = [
      {name: 'Горизонтальные', objects: [
        {  name: 'Стол для 2',
          width: 50,
          height: 25,
          countPerson: 2,
          tableNumber: 1}
      ]},
      {name: 'Вертикальные', objects: [
        {  name: 'Стол для 2',
          width: 25,
          height: 50,
          countPerson: 2,
          tableNumber: 1}
      ]}
    ];
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
  addObject() {
    this.trappedBoxes.push( {
      name: 'stol',
      x: 0,
      y: 0
    });
  }
  acceptBooking() {

  }

}
