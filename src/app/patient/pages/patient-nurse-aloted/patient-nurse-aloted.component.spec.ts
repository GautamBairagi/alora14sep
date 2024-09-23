import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientNurseAlotedComponent } from './patient-nurse-aloted.component';

describe('PatientNurseAlotedComponent', () => {
  let component: PatientNurseAlotedComponent;
  let fixture: ComponentFixture<PatientNurseAlotedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientNurseAlotedComponent]
    });
    fixture = TestBed.createComponent(PatientNurseAlotedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
