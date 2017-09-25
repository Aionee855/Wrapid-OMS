import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryUploadDedicatedComponent } from './inventory-upload-dedicated.component';

describe('InventoryUploadDedicatedComponent', () => {
  let component: InventoryUploadDedicatedComponent;
  let fixture: ComponentFixture<InventoryUploadDedicatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryUploadDedicatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryUploadDedicatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
