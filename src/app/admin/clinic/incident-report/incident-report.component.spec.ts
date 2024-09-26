import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentReportComponent } from './incident-report.component';

describe('IncidentReportComponent', () => {
  let component: IncidentReportComponent;
  let fixture: ComponentFixture<IncidentReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncidentReportComponent]
    });
    fixture = TestBed.createComponent(IncidentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
