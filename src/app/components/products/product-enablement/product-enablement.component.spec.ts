import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEnablementComponent } from './product-enablement.component';

describe('ProductEnablementComponent', () => {
  let component: ProductEnablementComponent;
  let fixture: ComponentFixture<ProductEnablementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductEnablementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEnablementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
