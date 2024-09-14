import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientsComponent } from './add-patients.component';

describe('AddPatientsComponent', () => {
  let component: AddPatientsComponent;
  let fixture: ComponentFixture<AddPatientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPatientsComponent]
    });
    fixture = TestBed.createComponent(AddPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
