import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenuRestaurantComponent } from './user-menu-restaurant.component';

describe('UserMenuRestaurantComponent', () => {
  let component: UserMenuRestaurantComponent;
  let fixture: ComponentFixture<UserMenuRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMenuRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMenuRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
