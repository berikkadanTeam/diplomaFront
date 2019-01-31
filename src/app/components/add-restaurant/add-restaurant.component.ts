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
      workDay: [
        {dayName: 'Понедельник', startTime: '00:00', endTime: '00:00'},
        {dayName: 'Вторник', startTime: '00:00', endTime: '00:00'},
        {dayName: 'Среда', startTime: '00:00', endTime: '00:00'},
        {dayName: 'Четверг', startTime: '00:00', endTime: '00:00'},
        {dayName: 'Пятница', startTime: '00:00', endTime: '00:00'},
        {dayName: 'Суббота', startTime: '00:00', endTime: '00:00'},
        {dayName: 'Воскресенье', startTime: '00:00', endTime: '00:00'},
      ],
      avatar: null,
      tables: []
    };
    this.addObjects = [
      {name: 'Горизонтальные', objects: [
        { name: 'Вход',
          width: 50,
          height: 20,
          countPerson: 0,
          numberOfTable: null},
        {  name: 'Стол для 2',
          width: 40,
          height: 40,
          countPerson: 2,
          numberOfTable: 1},
          {  name: 'Стол для 4',
          width: 80,
          height: 40,
          countPerson: 4,
          numberOfTable: 2},
          {  name: 'Стол для 6',
          width: 120,
          height: 40,
          countPerson: 6,
          numberOfTable: 3}
      ]},
      {name: 'Вертикальные', objects: [
        { name: 'Вход',
          width: 20,
          height: 50,
          countPerson: 0,
          numberOfTable: null},
        {  name: 'Стол для 2',
          width: 40,
          height: 40,
          countPerson: 2,
          numberOfTable: 1},
          {  name: 'Стол для 4',
          width: 40,
          height: 80,
          countPerson: 4,
          numberOfTable: 2},
          {  name: 'Стол для 6',
          width: 40,
          height: 120,
          countPerson: 6,
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
      name: object.name,
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
    this.style = {
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
    this.restaurant.area = {
      left: event.rectangle.left,
      top: event.rectangle.top,
      width: event.rectangle.width,
      height: event.rectangle.height
    };
  }
}
