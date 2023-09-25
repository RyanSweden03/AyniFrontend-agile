import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceMainContentComponent } from './finance-main-content.component';

describe('FinanceMainContentComponent', () => {
  let component: FinanceMainContentComponent;
  let fixture: ComponentFixture<FinanceMainContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceMainContentComponent]
    });
    fixture = TestBed.createComponent(FinanceMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
