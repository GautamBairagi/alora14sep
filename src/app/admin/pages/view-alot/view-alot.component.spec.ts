import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAlotComponent } from './view-alot.component';

describe('ViewAlotComponent', () => {
  let component: ViewAlotComponent;
  let fixture: ComponentFixture<ViewAlotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAlotComponent]
    });
    fixture = TestBed.createComponent(ViewAlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
