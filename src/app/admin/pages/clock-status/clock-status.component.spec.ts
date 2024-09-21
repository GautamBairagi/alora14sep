import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockStatusComponent } from './clock-status.component';

describe('ClockStatusComponent', () => {
  let component: ClockStatusComponent;
  let fixture: ComponentFixture<ClockStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClockStatusComponent]
    });
    fixture = TestBed.createComponent(ClockStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
