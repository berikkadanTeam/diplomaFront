import { Component, OnInit } from '@angular/core';
import { UserData, Menu, DishType } from 'src/app/shared/models/models';
import { ServerService } from 'src/app/shared/services/server.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-user-menu-restaurant',
	templateUrl: './user-menu-restaurant.component.html',
	styleUrls: [ './user-menu-restaurant.component.scss' ]
})
export class UserMenuRestaurantComponent implements OnInit {
	user: UserData;
	addingDish: Menu;
  dishType: DishType[] = [];
  api = environment.apiUrl;

	constructor(private server: ServerService) {}

	ngOnInit() {
		const user = localStorage.getItem('user');
		this.user = JSON.parse(user);
		this.server.getDishType().then((r) => {
			this.dishType = r;
			this.dishType[0].showDishes = true;
			this.server.getUserRestaurantMenu(this.user.id).then((r) => {
				this.dishType.map((dish) => {
					dish.menu = r.filter((res) => res.typeId === dish.Id);
				});
			});
    });
    this.addingDish = {
			id: '',
			nameOfDish: '',
			composition: '',
			typeId: 1,
      price: 0,
      restaurantId: this.user.restaurantId
		};
	}

	uploadDishFile(event: FileList, dish) {
		this.server.uploadDishFile(event.item(0), dish.id).then((r) => {
			dish.fileName = event.item(0).name;
		});
	}

	addDish() {
    this.server.setDishMenu(this.addingDish).then(r => {
      this.addingDish.id = r;
      console.log(this.addingDish)
      this.dishType.map((dish) => {
        if(dish.Id === this.addingDish.typeId) {
          dish.menu.push(this.addingDish);
          this.addingDish = {
            id: '',
            nameOfDish: '',
            composition: '',
            typeId: 1,
            price: 0,
            restaurantId: this.user.restaurantId
          };
        }
      });
    });
  }
  showTypeDishes(type: DishType) {
    this.dishType.map(r => {
      if(r.Id != type.Id) {
        r.showDishes = false;
      }
    })
    type.showDishes = !type.showDishes;

  }
}
