import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewfeedbackPageComponent } from './interviewfeedback-page.component';

describe('InterviewfeedbackPageComponent', () => {
  let component: InterviewfeedbackPageComponent;
  let fixture: ComponentFixture<InterviewfeedbackPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewfeedbackPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewfeedbackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
