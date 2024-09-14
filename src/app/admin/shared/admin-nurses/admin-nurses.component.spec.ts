import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNursesComponent } from './admin-nurses.component';

describe('AdminNursesComponent', () => {
  let component: AdminNursesComponent;
  let fixture: ComponentFixture<AdminNursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNursesComponent]
    });
    fixture = TestBed.createComponent(AdminNursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
