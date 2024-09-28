import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AloramailComponent } from './aloramail.component';

describe('AloramailComponent', () => {
  let component: AloramailComponent;
  let fixture: ComponentFixture<AloramailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AloramailComponent]
    });
    fixture = TestBed.createComponent(AloramailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
