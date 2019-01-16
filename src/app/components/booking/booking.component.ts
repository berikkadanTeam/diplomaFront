import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
interface Position {
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  countPerson: number;
  tableNumber: number;
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
  trappedBoxes: Position [] = [];

  addObjects: AddTypes [] = [];
  constructor() { }

  ngOnInit() {
    this.addObjects = [
      {name: 'Горизонтальные', objects: [
        {  name: 'Стол для 2',
          width: 100,
          height: 40,
          countPerson: 2,
          tableNumber: 1},
          {  name: 'Стол для 4',
          width: 100,
          height: 40,
          countPerson: 4,
          tableNumber: 2}
      ]},
      {name: 'Вертикальные', objects: [
        {  name: 'Стол для 2',
          width: 40,
          height: 100,
          countPerson: 2,
          tableNumber: 1},
          {  name: 'Стол для 4',
          width: 40,
          height: 100,
          countPerson: 4,
          tableNumber: 2},
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
  addObject(object: AddObject) {
    this.trappedBoxes.push( {
      name: object.name,
      x: 0,
      y: 0,
      width: object.width,
      height: object.height,
      countPerson: object.countPerson,
      tableNumber: object.tableNumber
    });
  }
  acceptBooking() {

  }
  selectedTable(tableNumber) {
    console.log(tableNumber);
  }

}
