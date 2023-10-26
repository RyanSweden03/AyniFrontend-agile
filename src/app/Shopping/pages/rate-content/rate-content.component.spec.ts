import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateContentComponent } from './rate-content.component';

describe('RateContentComponent', () => {
  let component: RateContentComponent;
  let fixture: ComponentFixture<RateContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RateContentComponent]
    });
    fixture = TestBed.createComponent(RateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
