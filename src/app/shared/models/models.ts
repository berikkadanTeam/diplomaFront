import * as moment from 'moment';
import _date = moment.unitOfTime._date;

export interface UserData {
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  location?: string;
}

export interface Restaurants {
  Name: string;
  Addres: string;
  Number: number;
  Kitchen: string;
  Delivery: boolean;
  AvgCheck: number;
  Seats: number;
  Description: string;
  cityId: number;
  WorkDay: WorkDay[];
  avatar: File;
  src?: string;
  tables?: Tables[];
}
export interface Tables {
  // id?: number;
  countPerson: number;
  restaurantId?: string;
  translateX: number;
  translateY: number;
  width: number;
  height: number;
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
export interface AddTypes {
  name: string;
  objects: AddObject[];
}
export interface AddObject {
  name: string;
  width: number;
  height: number;
  translateX?: number;
  translateY?: number;
  countPerson: number;
  numberOfTable: number;
}
