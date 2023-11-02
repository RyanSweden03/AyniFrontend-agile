import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesContentComponent } from './sales-content.component';

describe('SalesContentComponent', () => {
  let component: SalesContentComponent;
  let fixture: ComponentFixture<SalesContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesContentComponent]
    });
    fixture = TestBed.createComponent(SalesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
