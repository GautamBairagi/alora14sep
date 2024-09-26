import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicHealthRecordComponent } from './electronic-health-record.component';

describe('ElectronicHealthRecordComponent', () => {
  let component: ElectronicHealthRecordComponent;
  let fixture: ComponentFixture<ElectronicHealthRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectronicHealthRecordComponent]
    });
    fixture = TestBed.createComponent(ElectronicHealthRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
