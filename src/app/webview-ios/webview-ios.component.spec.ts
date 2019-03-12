import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebviewIosComponent } from './webview-ios.component';

describe('WebviewIosComponent', () => {
  let component: WebviewIosComponent;
  let fixture: ComponentFixture<WebviewIosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebviewIosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebviewIosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
