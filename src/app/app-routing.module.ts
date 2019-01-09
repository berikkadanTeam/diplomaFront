import { DeliveryComponent } from './components/delivery/delivery.component';
import { BookingComponent } from './components/booking/booking.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SignComponent } from './components/sign/sign.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'add-restaurant', component: AddRestaurantComponent },
    ]
  },
  {
    path: 'sign', component: SignComponent
  },
  {
    path: 'booking', component: BookingComponent
  },
  {
    path: 'delivery', component: DeliveryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
