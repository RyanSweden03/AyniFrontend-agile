import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesContentComponent } from './purchases-content.component';

describe('PurchasesContentComponent', () => {
  let component: PurchasesContentComponent;
  let fixture: ComponentFixture<PurchasesContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchasesContentComponent]
    });
    fixture = TestBed.createComponent(PurchasesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
