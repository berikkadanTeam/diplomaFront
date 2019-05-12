import { ServerService } from './../../shared/services/server.service';
import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/shared/models/models';

@Component({
	selector: 'app-add-money',
	templateUrl: './add-money.component.html',
	styleUrls: [ './add-money.component.scss' ]
})
export class AddMoneyComponent implements OnInit {
	user: UserData;

	money: number;

	constructor(private server: ServerService) {}

	ngOnInit() {
		const user = localStorage.getItem('user');
		this.user = JSON.parse(user);
	}

	setMoney() {
		this.server.setMoney(this.user.id, this.money).then(() => {
			alert('Баланс пополнен');
		});
	}
}
