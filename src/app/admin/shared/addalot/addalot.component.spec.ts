import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddalotComponent } from './addalot.component';

describe('AddalotComponent', () => {
  let component: AddalotComponent;
  let fixture: ComponentFixture<AddalotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddalotComponent]
    });
    fixture = TestBed.createComponent(AddalotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
