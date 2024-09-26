import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationAndPlanComponent } from './certification-and-plan.component';

describe('CertificationAndPlanComponent', () => {
  let component: CertificationAndPlanComponent;
  let fixture: ComponentFixture<CertificationAndPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificationAndPlanComponent]
    });
    fixture = TestBed.createComponent(CertificationAndPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
