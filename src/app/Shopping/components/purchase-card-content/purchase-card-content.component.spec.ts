import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCardContentComponent } from './purchase-card-content.component';

describe('PurchaseCardContentComponent', () => {
  let component: PurchaseCardContentComponent;
  let fixture: ComponentFixture<PurchaseCardContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseCardContentComponent]
    });
    fixture = TestBed.createComponent(PurchaseCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
