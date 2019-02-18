import { ServerService } from 'src/app/shared/services/server.service';
import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/shared/models/models';

@Component({
	selector: 'app-booked-tables',
	templateUrl: './booked-tables.component.html',
	styleUrls: [ './booked-tables.component.scss' ]
})
export class BookedTablesComponent implements OnInit {
	user: UserData;
	constructor(private server: ServerService) {}

	ngOnInit() {
		const user = localStorage.getItem('user');
    this.user = JSON.parse(user);

    this.server.getBookedTable(this.user.restaurantId).then(r => {
      console.log(r);
    });
	}
}
