import { BookedTablesComponent } from './../booked-tables/booked-tables.component';
import { UserRestaurantComponent } from './../user-restaurant/user-restaurant.component';
import { EventService } from './../../shared/services/event.service';
import { Component, OnInit, ComponentFactoryResolver, ComponentRef, ViewChild } from '@angular/core';
import { UserData, ITab } from 'src/app/shared/models/models';
import { TabDirective } from 'src/app/shared/directives/tab.directive';
import { UserMenuRestaurantComponent } from '../user-menu-restaurant/user-menu-restaurant.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user: UserData;
  tabTitle;
  tabs: ITab[] = [
    {
      id: 1,
      component: UserRestaurantComponent,
      title: 'Ресторан',
      active: true
    },
    {
      id: 2,
      component: UserMenuRestaurantComponent,
      title: 'Меню',
    },
    {
      id: 3,
      component: BookedTablesComponent,
      title: 'Забронированные столы',
    },

  ];
  private dynamicComponentRef: ComponentRef<any>;
  @ViewChild(TabDirective) tabDirective: TabDirective;

  constructor(private event: EventService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const user = localStorage.getItem('user');
    this.user = JSON.parse(user);
    this.loadComponent(this.tabs[0].component);

  }
  setTab(e){
    this.tabTitle = ' / ' + e;
    this.event.currentTabTitle.next(this.tabTitle);
    this.tabs.forEach(t => t.active = false);
    e.active = true;

    if (this.dynamicComponentRef) {
      this.dynamicComponentRef.destroy();
    }
    this.loadComponent(e.component);
  }

  loadComponent(component: any) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    let viewContainerRef = this.tabDirective.viewContainerRef;
    viewContainerRef.clear();
    this.dynamicComponentRef = viewContainerRef.createComponent(factory);
  }

}
