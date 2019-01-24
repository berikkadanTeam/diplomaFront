import * as moment from 'moment';
import _date = moment.unitOfTime._date;
import { Time } from '@angular/common';

export interface UserData {
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  location?: string;
}

export interface Restaurants {
  name: string;
  addres: string;
  number: number;
  kitchen: string;
  delivery: boolean;
  avgCheck: number;
  seats: number;
  description: string;
  cityId: number;
  workDay: WorkDay[];
  avatar: File;
  src?: string;
  tables: Tables[];
}
export interface Tables {
  id?: string;
  countPerson: number;
  restaurantId?: string;
  translateX: number;
  translateY: number;
  width: number;
  height: number;
  numberOfTable?: number;
  reservTable?: boolean;
  isSelected?: boolean;
}
export interface WorkDay {
  DayName: string;
  StartTime: string;
  EndTime: string;
}

export class Cities {
  Id: number;
  cityTitle: string;
  countryId: string;
}
export class Countries {
  Id: number;
  countryTitle: string;
}

export interface Positions {
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  countPerson: number;
  numberOfTable: number;
}

export interface BookingTable {
  id?: string;
  date: any;
  time: any;
  comments: string;
  tableId: string;
  userId?: string;
}
