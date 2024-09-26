import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationProfileComponent } from './medication-profile.component';

describe('MedicationProfileComponent', () => {
  let component: MedicationProfileComponent;
  let fixture: ComponentFixture<MedicationProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicationProfileComponent]
    });
    fixture = TestBed.createComponent(MedicationProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
