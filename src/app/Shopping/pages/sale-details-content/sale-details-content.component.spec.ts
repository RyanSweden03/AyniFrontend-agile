import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleDetailsContentComponent } from './sale-details-content.component';

describe('SaleDetailsContentComponent', () => {
  let component: SaleDetailsContentComponent;
  let fixture: ComponentFixture<SaleDetailsContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleDetailsContentComponent]
    });
    fixture = TestBed.createComponent(SaleDetailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
