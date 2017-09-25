import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryRemoveDedicatedComponent } from './inventory-remove-dedicated.component';

describe('InventoryRemoveDedicatedComponent', () => {
  let component: InventoryRemoveDedicatedComponent;
  let fixture: ComponentFixture<InventoryRemoveDedicatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryRemoveDedicatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryRemoveDedicatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
