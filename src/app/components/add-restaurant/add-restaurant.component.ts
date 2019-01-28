import { Restaurants, Positions } from './../../shared/models/models';
import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/shared/services/server.service';
import { Cities, Countries } from 'src/app/shared/models/models';
import { Router } from '@angular/router';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit {

  cities: Cities [] = [];
  countries: Countries [] = [];
  restaurant: Restaurants = null;
  addObjects;
  public style: object = {};
  constructor(private service: ServerService,
    private router: Router) { }

  ngOnInit() {
    this.service.getCity().then(res => {
      this.cities = res;
    });
    this.service.getCountries().then(res => {
      this.countries = res;
    });

    this.restaurant = {
      name: '',
      addres: '',
      number: 0,
      kitchen: '',
      delivery: true,
      avgCheck: 0,
      seats: 0,
      description: '',
      cityId: 0,
      workDay: [
        {DayName: 'Понедельник', StartTime: '00:00', EndTime: '00:00'},
        {DayName: 'Вторник', StartTime: '00:00', EndTime: '00:00'},
        {DayName: 'Среда', StartTime: '00:00', EndTime: '00:00'},
        {DayName: 'Четверг', StartTime: '00:00', EndTime: '00:00'},
        {DayName: 'Пятница', StartTime: '00:00', EndTime: '00:00'},
        {DayName: 'Суббота', StartTime: '00:00', EndTime: '00:00'},
        {DayName: 'Воскресенье', StartTime: '00:00', EndTime: '00:00'},
      ],
      avatar: null,
      tables: []
    };
    this.addObjects = [
      {name: 'Горизонтальные', objects: [
        {  name: 'Стол для 2',
          width: 100,
          height: 40,
          countPerson: 2,
          numberOfTable: 1},
          {  name: 'Стол для 4',
          width: 100,
          height: 40,
          countPerson: 4,
          numberOfTable: 2}
      ]},
      {name: 'Вертикальные', objects: [
        {  name: 'Стол для 2',
          width: 40,
          height: 100,
          countPerson: 2,
          numberOfTable: 1},
          {  name: 'Стол для 4',
          width: 40,
          height: 100,
          countPerson: 4,
          numberOfTable: 2},
      ]}
    ];
  }
  uploadAvatar(event: FileList) {
    this.restaurant.avatar = null;
    this.restaurant.avatar = event.item(0);
  }
  setRestaurant() {
    this.service.setRestaurant(this.restaurant).then(r => {
      return this.router.navigate(['']);
    });
  }
  onChanged(increased, index) {
    this.restaurant.tables[index].translateX = increased.x;
    this.restaurant.tables[index].translateY = increased.y;
  }

  addObject(object) {
    this.restaurant.tables.push( {
      countPerson: object.countPerson,
      translateX: 0,
      translateY: 0,
      width: object.width,
      height: object.height
    });
  }

  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX = 50;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    console.log(event)
    this.style = {
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }
}
