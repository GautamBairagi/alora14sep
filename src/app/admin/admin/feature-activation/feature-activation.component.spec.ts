import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureActivationComponent } from './feature-activation.component';

describe('FeatureActivationComponent', () => {
  let component: FeatureActivationComponent;
  let fixture: ComponentFixture<FeatureActivationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureActivationComponent]
    });
    fixture = TestBed.createComponent(FeatureActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
