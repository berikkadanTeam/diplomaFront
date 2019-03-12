import { WebviewIosComponent } from './webview-ios/webview-ios.component';
import { AddPersonalComponent } from './components/add-personal/add-personal.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { BookingComponent } from './components/booking/booking.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SignComponent } from './components/sign/sign.component';
import { RestaurantAreaComponent } from './components/restaurant-area/restaurant-area.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { WebviewBookingComponent } from './components/webview-booking/webview-booking.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'add-restaurant', component: AddRestaurantComponent },
      { path: 'add-personal', component: AddPersonalComponent },
      { path: 'user-info', component: UserInfoComponent },
      { path: 'restaurantid/:id', component: WebviewBookingComponent},
      { path: 'iOSRestaurant/:id', component: WebviewIosComponent},
      {
        path: 'restaurant/:id', children: [
          {path: 'booking', component: BookingComponent},
          { path: 'delivery', component: DeliveryComponent},
          { path: 'restaurantArea', component: RestaurantAreaComponent},
        ]
      },
    ]
  },
  {
    path: 'sign', component: SignComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}


