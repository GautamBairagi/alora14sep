import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicClaimFileComponent } from './electronic-claim-file.component';

describe('ElectronicClaimFileComponent', () => {
  let component: ElectronicClaimFileComponent;
  let fixture: ComponentFixture<ElectronicClaimFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectronicClaimFileComponent]
    });
    fixture = TestBed.createComponent(ElectronicClaimFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
