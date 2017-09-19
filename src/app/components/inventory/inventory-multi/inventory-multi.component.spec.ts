import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryMultiComponent } from './inventory-multi.component';

describe('InventoryMultiComponent', () => {
  let component: InventoryMultiComponent;
  let fixture: ComponentFixture<InventoryMultiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryMultiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
