import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAreaComponent } from './restaurant-area.component';

describe('RestaurantAreaComponent', () => {
  let component: RestaurantAreaComponent;
  let fixture: ComponentFixture<RestaurantAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
