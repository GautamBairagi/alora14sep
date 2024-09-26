import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AideDocsComponent } from './aide-docs.component';

describe('AideDocsComponent', () => {
  let component: AideDocsComponent;
  let fixture: ComponentFixture<AideDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AideDocsComponent]
    });
    fixture = TestBed.createComponent(AideDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
