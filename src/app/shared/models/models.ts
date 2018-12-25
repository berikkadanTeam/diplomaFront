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
  title: string;
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
