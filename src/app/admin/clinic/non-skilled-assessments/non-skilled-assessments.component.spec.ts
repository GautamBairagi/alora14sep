import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonSkilledAssessmentsComponent } from './non-skilled-assessments.component';

describe('NonSkilledAssessmentsComponent', () => {
  let component: NonSkilledAssessmentsComponent;
  let fixture: ComponentFixture<NonSkilledAssessmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonSkilledAssessmentsComponent]
    });
    fixture = TestBed.createComponent(NonSkilledAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
