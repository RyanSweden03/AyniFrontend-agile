import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCostContentComponent } from './table-cost-content.component';

describe('TableCostContentComponent', () => {
  let component: TableCostContentComponent;
  let fixture: ComponentFixture<TableCostContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCostContentComponent]
    });
    fixture = TestBed.createComponent(TableCostContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
