import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechTherapyDocsComponent } from './speech-therapy-docs.component';

describe('SpeechTherapyDocsComponent', () => {
  let component: SpeechTherapyDocsComponent;
  let fixture: ComponentFixture<SpeechTherapyDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeechTherapyDocsComponent]
    });
    fixture = TestBed.createComponent(SpeechTherapyDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
