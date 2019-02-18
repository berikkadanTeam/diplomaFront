import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedTablesComponent } from './booked-tables.component';

describe('BookedTablesComponent', () => {
  let component: BookedTablesComponent;
  let fixture: ComponentFixture<BookedTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
