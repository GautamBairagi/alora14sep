import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalSocialWorkerComponent } from './medical-social-worker.component';

describe('MedicalSocialWorkerComponent', () => {
  let component: MedicalSocialWorkerComponent;
  let fixture: ComponentFixture<MedicalSocialWorkerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalSocialWorkerComponent]
    });
    fixture = TestBed.createComponent(MedicalSocialWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
