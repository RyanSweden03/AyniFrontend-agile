import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseDetailsContentComponent } from './purchase-details-content.component';

describe('PurchaseDetailsContentComponent', () => {
  let component: PurchaseDetailsContentComponent;
  let fixture: ComponentFixture<PurchaseDetailsContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseDetailsContentComponent]
    });
    fixture = TestBed.createComponent(PurchaseDetailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
