import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalTherapyDocsComponent } from './physical-therapy-docs.component';

describe('PhysicalTherapyDocsComponent', () => {
  let component: PhysicalTherapyDocsComponent;
  let fixture: ComponentFixture<PhysicalTherapyDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhysicalTherapyDocsComponent]
    });
    fixture = TestBed.createComponent(PhysicalTherapyDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
