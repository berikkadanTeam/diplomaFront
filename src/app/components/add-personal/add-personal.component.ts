import { Router } from '@angular/router';
import { ServerService } from './../../shared/services/server.service';
import { Component, OnInit } from '@angular/core';
import { UserData, Role } from 'src/app/shared/models/models';

@Component({
  selector: 'app-add-personal',
  templateUrl: './add-personal.component.html',
  styleUrls: ['./add-personal.component.scss']
})
export class AddPersonalComponent implements OnInit {
  public user: UserData;
  userAdmin: UserData;

  roles: Role[] = [];

  constructor(private service: ServerService, private router: Router) { }

  ngOnInit() {
    const user = localStorage.getItem('user');
    this.userAdmin = JSON.parse(user);
    this.user = {
      id: '',
      userName: '',
      password: '',
      firstName: '',
      lastName: '',
      location: '',
      restaurantId: this.userAdmin.restaurantId
    };
    this.service.getRoles().then(r => {
      this.roles = r;
    });
  }

  signUp() {
    this.service.signUp(this.user).then(r => {
      alert("Персонал успешно добавлен");
      return this.router.navigate(['']);

    },
      (err => {
        console.log(err);
      }));
  }
}
