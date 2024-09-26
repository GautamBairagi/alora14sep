import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientScreeningComponent } from './patient-screening.component';

describe('PatientScreeningComponent', () => {
  let component: PatientScreeningComponent;
  let fixture: ComponentFixture<PatientScreeningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientScreeningComponent]
    });
    fixture = TestBed.createComponent(PatientScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
