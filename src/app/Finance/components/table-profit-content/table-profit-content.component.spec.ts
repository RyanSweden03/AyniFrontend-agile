import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProfitContentComponent } from './table-profit-content.component';

describe('TableBillContentComponent', () => {
  let component: TableProfitContentComponent;
  let fixture: ComponentFixture<TableProfitContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableProfitContentComponent]
    });
    fixture = TestBed.createComponent(TableProfitContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
