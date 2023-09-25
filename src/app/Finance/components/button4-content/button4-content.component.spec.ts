import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button4ContentComponent } from './button4-content.component';

describe('Button4ContentComponent', () => {
  let component: Button4ContentComponent;
  let fixture: ComponentFixture<Button4ContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Button4ContentComponent]
    });
    fixture = TestBed.createComponent(Button4ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
