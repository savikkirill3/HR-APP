import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvsAddComponent } from './cvs-add.component';

describe('CvsAddComponent', () => {
  let component: CvsAddComponent;
  let fixture: ComponentFixture<CvsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
