import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNursesComponent } from './add-nurses.component';

describe('AddNursesComponent', () => {
  let component: AddNursesComponent;
  let fixture: ComponentFixture<AddNursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNursesComponent]
    });
    fixture = TestBed.createComponent(AddNursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
