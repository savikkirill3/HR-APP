import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewfeedbackComponent } from './interviewfeedback.component';

describe('InterviewfeedbackComponent', () => {
  let component: InterviewfeedbackComponent;
  let fixture: ComponentFixture<InterviewfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
