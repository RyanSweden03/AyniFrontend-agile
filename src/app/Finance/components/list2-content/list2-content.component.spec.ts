import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List2ContentComponent } from './list2-content.component';

describe('List2ContentComponent', () => {
  let component: List2ContentComponent;
  let fixture: ComponentFixture<List2ContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [List2ContentComponent]
    });
    fixture = TestBed.createComponent(List2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
