import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimSummaryComponent } from './claim-summary.component';

describe('ClaimSummaryComponent', () => {
  let component: ClaimSummaryComponent;
  let fixture: ComponentFixture<ClaimSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClaimSummaryComponent]
    });
    fixture = TestBed.createComponent(ClaimSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
