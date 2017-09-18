import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsStockComponent } from './products-stock.component';

describe('ProductsStockComponent', () => {
  let component: ProductsStockComponent;
  let fixture: ComponentFixture<ProductsStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
