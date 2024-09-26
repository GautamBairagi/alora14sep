import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationalTherapyDocsComponent } from './occupational-therapy-docs.component';

describe('OccupationalTherapyDocsComponent', () => {
  let component: OccupationalTherapyDocsComponent;
  let fixture: ComponentFixture<OccupationalTherapyDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OccupationalTherapyDocsComponent]
    });
    fixture = TestBed.createComponent(OccupationalTherapyDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
