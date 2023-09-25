import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button3ContentComponent } from './button3-content.component';

describe('Button3ContentComponent', () => {
  let component: Button3ContentComponent;
  let fixture: ComponentFixture<Button3ContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Button3ContentComponent]
    });
    fixture = TestBed.createComponent(Button3ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
