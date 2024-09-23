import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseAloteViewComponent } from './nurse-alote-view.component';

describe('NurseAloteViewComponent', () => {
  let component: NurseAloteViewComponent;
  let fixture: ComponentFixture<NurseAloteViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NurseAloteViewComponent]
    });
    fixture = TestBed.createComponent(NurseAloteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
