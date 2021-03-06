import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/shared/services/server.service';
import { Router } from '@angular/router';
import { UserData } from 'src/app/shared/models/models';
import * as signalR from '@aspnet/signalr';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  public user: UserData = {
    id: '',
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    location: '',
    userRole: 'CommonUser',
    restaurantId: null,
    phoneNumber: ''
  };

  signInUp = false;
  error = '';

  status: string;
  constructor(private service: ServerService,
    private router: Router) { }

  ngOnInit() {
  }
  auth() {
    this.service.getToken(this.user.userName, this.user.password).then(res => {

      console.log(res)

      if (res) {
        localStorage.setItem('token', res.auth_token);

        this.service.getUserInfo(res.id).then(r => {
          this.user = r;
          this.user.id = res.id;
          localStorage.setItem('user', JSON.stringify(this.user));
          return this.router.navigate(['']);
        });
      }
    },
      (err => {
        alert(err.error.status);
        this.error = err.error.err[0];
      }));
  }

  sign() {
    if (this.signInUp === true) {
      this.signInUp = false;
    } else {
      this.signInUp = true;
    }
  }

  signUp() {
    this.service.signUp(this.user).then(r => {
      alert(r.status);
      this.signInUp = false;
    },
      (err => {
        console.log(err);
      }));
  }
}
