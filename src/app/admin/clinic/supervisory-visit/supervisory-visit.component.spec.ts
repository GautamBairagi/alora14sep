import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisoryVisitComponent } from './supervisory-visit.component';

describe('SupervisoryVisitComponent', () => {
  let component: SupervisoryVisitComponent;
  let fixture: ComponentFixture<SupervisoryVisitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupervisoryVisitComponent]
    });
    fixture = TestBed.createComponent(SupervisoryVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
