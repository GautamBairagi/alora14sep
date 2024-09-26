import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BradenScaleComponent } from './braden-scale.component';

describe('BradenScaleComponent', () => {
  let component: BradenScaleComponent;
  let fixture: ComponentFixture<BradenScaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BradenScaleComponent]
    });
    fixture = TestBed.createComponent(BradenScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
