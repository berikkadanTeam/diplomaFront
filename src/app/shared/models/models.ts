import * as moment from 'moment';
import _date = moment.unitOfTime._date;
import { Time } from '@angular/common';

export interface UserData {
  id?: string;
  userName?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  location?: string;
  restaurantId?: string;
  roles?: [];
  userRole?: string;
  virtualMoney?: string;
}

export interface UserDataEx {
  id?: string;
  userName?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  location?: string;
  // restaurantId?: string;
  roles?: [];
  userRole?: string;
}

export interface Restaurants {
  id: string;
  name: string;
  addres: string;
  number: string;
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
  area?: Area;
  menu?: Menu[];
  city?: string;
  fileName?: string;
  images?: Images[];
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
  name?: string;
}
export interface WorkDay {
  dayName: string;
  startTime: string;
  endTime: string;
}

export interface Menu {
  id?: string;
  nameOfDish: string;
  typeId?: number;
  composition: string;
  price: number;
  title?: string;
  restaurantId?: string;
  fileId?: string;
  fileName?: string;
  filePath?: string;
  checked?: boolean;
  dishCount?: number;
}

export interface DishType {
  id: number;
  title: string;
  showDishes?: boolean;
  menu?: Menu[];
}

export class Cities {
  id: number;
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
  menu?: Menu[];
  numberOfGuests?: number;
}
export interface BookedTable {
  id?: string;
  date: any;
  time: any;
  comments: string;
  tableId: string;
  lastName: string;
  firstName: string;
  countPerson: number;
  showFullInfo: boolean;
  menu?: Menu[];
  numberOfGuests?: number;
  reserveStatus?: number;
}
export interface Area {
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface ITab {
  id: number;
  title: string;
  component: any;
  icon?: string;
  active?: boolean;
  percent?: number;
}

export interface Role {
  concurrencyStamp: string;
  id: number;
  name: string;
  normalizedName: string;
}

export interface Images {
  id: string;
  name: string;
  isShow?: boolean;
}


export interface Promotion {
  id: string;
  title: string;
  fileName: string;
  description: string;
  fromDate: Date;
  toDate: Date;
  restaurantId: string;
  restaurantName: string;

}
