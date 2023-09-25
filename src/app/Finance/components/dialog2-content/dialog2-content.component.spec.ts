import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialog2ContentComponent } from './dialog2-content.component';

describe('Dialog2ContentComponent', () => {
  let component: Dialog2ContentComponent;
  let fixture: ComponentFixture<Dialog2ContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Dialog2ContentComponent]
    });
    fixture = TestBed.createComponent(Dialog2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
