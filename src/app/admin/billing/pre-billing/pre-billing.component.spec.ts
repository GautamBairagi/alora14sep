import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreBillingComponent } from './pre-billing.component';

describe('PreBillingComponent', () => {
  let component: PreBillingComponent;
  let fixture: ComponentFixture<PreBillingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreBillingComponent]
    });
    fixture = TestBed.createComponent(PreBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
