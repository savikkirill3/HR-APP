import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NewExperiencesDialogComponent} from './new-experiences-dialog.component';

describe('NewNotesDialogComponent', () => {
  let component: NewExperiencesDialogComponent;
  let fixture: ComponentFixture<NewExperiencesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewExperiencesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExperiencesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
