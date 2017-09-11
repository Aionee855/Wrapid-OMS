import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersNavigationComponent } from './orders-navigation.component';

describe('OrdersNavigationComponent', () => {
  let component: OrdersNavigationComponent;
  let fixture: ComponentFixture<OrdersNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
