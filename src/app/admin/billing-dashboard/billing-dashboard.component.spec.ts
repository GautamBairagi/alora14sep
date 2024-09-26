import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingDashboardComponent } from './billing-dashboard.component';

describe('BillingDashboardComponent', () => {
  let component: BillingDashboardComponent;
  let fixture: ComponentFixture<BillingDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillingDashboardComponent]
    });
    fixture = TestBed.createComponent(BillingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
