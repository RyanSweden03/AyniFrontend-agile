import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSaleContentComponent } from './add-sale-content.component';

describe('AddSaleContentComponent', () => {
  let component: AddSaleContentComponent;
  let fixture: ComponentFixture<AddSaleContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSaleContentComponent]
    });
    fixture = TestBed.createComponent(AddSaleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
