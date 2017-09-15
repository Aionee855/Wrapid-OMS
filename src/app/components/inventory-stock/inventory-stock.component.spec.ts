import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryStockComponent } from './inventory-stock.component';

describe('InventoryStockComponent', () => {
  let component: InventoryStockComponent;
  let fixture: ComponentFixture<InventoryStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
