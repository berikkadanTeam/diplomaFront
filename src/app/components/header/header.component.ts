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
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    const user = localStorage.getItem('user');
    this.user = JSON.parse(user);
  }

  logout() {
    localStorage.clear();
    location.reload();
    return this.router.navigate(['']);
  }
}
