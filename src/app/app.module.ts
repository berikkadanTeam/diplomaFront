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
    ResizableModule
  ],
  providers: [
    ServerService,
    <ClassProvider>{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
