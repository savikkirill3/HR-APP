import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCandidateDialogComponent } from './edit-candidate-dialog.component';

describe('EditCandidateDialogComponent', () => {
  let component: EditCandidateDialogComponent;
  let fixture: ComponentFixture<EditCandidateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCandidateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCandidateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
