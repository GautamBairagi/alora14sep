import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchPrintInvoicesComponent } from './batch-print-invoices.component';

describe('BatchPrintInvoicesComponent', () => {
  let component: BatchPrintInvoicesComponent;
  let fixture: ComponentFixture<BatchPrintInvoicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatchPrintInvoicesComponent]
    });
    fixture = TestBed.createComponent(BatchPrintInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
