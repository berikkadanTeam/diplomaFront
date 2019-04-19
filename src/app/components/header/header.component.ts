import { UserData } from 'src/app/shared/models/models';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: UserData;
  currentRole: boolean = false;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    this.user = JSON.parse(user);
    if(this.user && token != 'null') {
      if (this.user.roles.some(e => e === "Admin")) {
        this.currentRole = true;
        }
    }

  }

  logout() {
    localStorage.clear();
    location.reload();
    return this.router.navigate(['']);
  }
}
