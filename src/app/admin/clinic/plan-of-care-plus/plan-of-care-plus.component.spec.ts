import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanOfCarePlusComponent } from './plan-of-care-plus.component';

describe('PlanOfCarePlusComponent', () => {
  let component: PlanOfCarePlusComponent;
  let fixture: ComponentFixture<PlanOfCarePlusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanOfCarePlusComponent]
    });
    fixture = TestBed.createComponent(PlanOfCarePlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
