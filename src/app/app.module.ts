import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ClassProvider } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerService } from './shared/services/server.service';
import { HomeComponent } from './components/home/home.component';
import { AuthInterceptor } from './components/sign/auth-interceptor';
import { SignComponent } from './components/sign/sign.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { BookingComponent } from './components/booking/booking.component';
import { DraggableModule } from './shared/directives/draggable/draggable.module';
import { FooterComponent } from './components/footer/footer.component';
import { ResizableModule } from 'angular-resizable-element';
import { RestaurantAreaComponent } from './components/restaurant-area/restaurant-area.component';
import { AddPersonalComponent } from './components/add-personal/add-personal.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { WebviewBookingComponent } from './components/webview-booking/webview-booking.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { UserRestaurantComponent } from './components/user-restaurant/user-restaurant.component';
import { TabDirective } from './shared/directives/tab.directive';
import { UserMenuRestaurantComponent } from './components/user-menu-restaurant/user-menu-restaurant.component';
import { BookedTablesComponent } from './components/booked-tables/booked-tables.component';
import { WebviewIosComponent } from './webview-ios/webview-ios.component';
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';
import { AddPromotionComponent } from './components/add-promotion/add-promotion.component';
import { AddMoneyComponent } from './components/add-money/add-money.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    SignComponent,
    HeaderComponent,
    ContentComponent,
    DeliveryComponent,
    AddRestaurantComponent,
    BookingComponent,
    FooterComponent,
    RestaurantAreaComponent,
    AddPersonalComponent,
    UserInfoComponent,
    WebviewBookingComponent,
    UserRestaurantComponent,
    TabDirective,
    UserMenuRestaurantComponent,
    BookedTablesComponent,
    WebviewIosComponent,
    ConfirmEmailComponent,
    AddPromotionComponent,
    AddMoneyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    DraggableModule,
    ResizableModule,
    NgxPaginationModule
  ],
  providers: [
    ServerService,
    <ClassProvider>{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  entryComponents: [
    UserRestaurantComponent,
    UserMenuRestaurantComponent,
    BookedTablesComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
