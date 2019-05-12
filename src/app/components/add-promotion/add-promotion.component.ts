import { UserData } from './../../shared/models/models';
import { Component, OnInit } from '@angular/core';
import { Promotion } from 'src/app/shared/models/models';
import { ServerService } from 'src/app/shared/services/server.service';

@Component({
	selector: 'app-add-promotion',
	templateUrl: './add-promotion.component.html',
	styleUrls: [ './add-promotion.component.scss' ]
})
export class AddPromotionComponent implements OnInit {
	addedPromotion: Promotion;
	user: UserData;

	constructor(private server: ServerService) {}

	ngOnInit() {
		this.addedPromotion = {
			title: '',
			description: ''
		};
		const user = localStorage.getItem('user');
		this.user = JSON.parse(user);
	}
	uploadAvatar(event: FileList) {
		this.addedPromotion.avatar = null;
		this.addedPromotion.avatar = event.item(0);
	}

	setPromotion() {
		this.server.setPrmotion(this.addedPromotion, this.user.restaurantId).then(() => {
			alert('Акция добавлена');
		});
	}
}
