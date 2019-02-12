import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebviewBookingComponent } from './webview-booking.component';

describe('WebviewBookingComponent', () => {
  let component: WebviewBookingComponent;
  let fixture: ComponentFixture<WebviewBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebviewBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebviewBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
