import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryUpdateHistoryComponent } from './inventory-update-history.component';

describe('InventoryUpdateHistoryComponent', () => {
  let component: InventoryUpdateHistoryComponent;
  let fixture: ComponentFixture<InventoryUpdateHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryUpdateHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryUpdateHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
