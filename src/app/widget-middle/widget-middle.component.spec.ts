import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMiddleComponent } from './widget-middle.component';

describe('WidgetMiddleComponent', () => {
  let component: WidgetMiddleComponent;
  let fixture: ComponentFixture<WidgetMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
