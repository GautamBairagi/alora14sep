import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsPDGMComponent } from './claims-pdgm.component';

describe('ClaimsPDGMComponent', () => {
  let component: ClaimsPDGMComponent;
  let fixture: ComponentFixture<ClaimsPDGMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClaimsPDGMComponent]
    });
    fixture = TestBed.createComponent(ClaimsPDGMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
