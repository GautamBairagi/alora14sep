import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilledNursingVisitComponent } from './skilled-nursing-visit.component';

describe('SkilledNursingVisitComponent', () => {
  let component: SkilledNursingVisitComponent;
  let fixture: ComponentFixture<SkilledNursingVisitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkilledNursingVisitComponent]
    });
    fixture = TestBed.createComponent(SkilledNursingVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
