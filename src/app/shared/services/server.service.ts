import { UserData } from 'src/app/shared/models/models';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable()
export class ServerService extends BaseService {
  public api = environment.apiUrl;
  private httpHeaders = new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  constructor(http: HttpClient) {
    super(http);
  }

  getToken(name: string, password: string): any {
    const body = new HttpParams()
      .set('userName', name)
      .set('password', password);
    const uri = 'auth/login';
    return this.http.post(this.api + uri, body.toString(), {
        headers: this.httpHeaders
      }).toPromise().then(res => res);
  }
  signUp(user: UserData): any {
    const body = new HttpParams()
    .set('email', user.username)
    .set('password', user.password)
    .set('firstName', user.firstName)
    .set('lastName', user.lastName)
    .set('location', user.location);
  const uri = 'accounts';
  return this.http.post(this.api + uri, body.toString(), {
      headers: this.httpHeaders
    }).toPromise().then(res => res);
  }

  getUserInfo() {
    const url = 'dashboard/home';
    return this.get(this.api + url, {});
  }
  getCity() {
    const url = 'Restaurants/GetCities';
    return this.get(this.api + url, {});
  }
  getCountries() {
    const url = 'Restaurants/GetCountries';
    return this.get(this.api + url, {});
  }

}
