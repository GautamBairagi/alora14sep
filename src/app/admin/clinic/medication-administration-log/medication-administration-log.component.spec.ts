import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationAdministrationLogComponent } from './medication-administration-log.component';

describe('MedicationAdministrationLogComponent', () => {
  let component: MedicationAdministrationLogComponent;
  let fixture: ComponentFixture<MedicationAdministrationLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicationAdministrationLogComponent]
    });
    fixture = TestBed.createComponent(MedicationAdministrationLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
