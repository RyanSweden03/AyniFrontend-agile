import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBillContentComponent } from './table-bill-content.component';

describe('TableBillContentComponent', () => {
  let component: TableBillContentComponent;
  let fixture: ComponentFixture<TableBillContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableBillContentComponent]
    });
    fixture = TestBed.createComponent(TableBillContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
