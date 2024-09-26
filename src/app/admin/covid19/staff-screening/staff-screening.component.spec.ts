import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffScreeningComponent } from './staff-screening.component';

describe('StaffScreeningComponent', () => {
  let component: StaffScreeningComponent;
  let fixture: ComponentFixture<StaffScreeningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffScreeningComponent]
    });
    fixture = TestBed.createComponent(StaffScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
