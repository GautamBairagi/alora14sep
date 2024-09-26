import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchPrintClaimsComponent } from './batch-print-claims.component';

describe('BatchPrintClaimsComponent', () => {
  let component: BatchPrintClaimsComponent;
  let fixture: ComponentFixture<BatchPrintClaimsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatchPrintClaimsComponent]
    });
    fixture = TestBed.createComponent(BatchPrintClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
