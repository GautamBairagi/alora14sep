import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPatientsComponent } from './view-patients.component';

describe('ViewPatientsComponent', () => {
  let component: ViewPatientsComponent;
  let fixture: ComponentFixture<ViewPatientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPatientsComponent]
    });
    fixture = TestBed.createComponent(ViewPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
