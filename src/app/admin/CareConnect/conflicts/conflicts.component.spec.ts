import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConflictsComponent } from './conflicts.component';

describe('ConflictsComponent', () => {
  let component: ConflictsComponent;
  let fixture: ComponentFixture<ConflictsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConflictsComponent]
    });
    fixture = TestBed.createComponent(ConflictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
