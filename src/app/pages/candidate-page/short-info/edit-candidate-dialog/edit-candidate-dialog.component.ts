import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { CandiateShortInfo } from '../short-info.component';

@Component({
  selector: 'app-edit-candidate-dialog',
  templateUrl: './edit-candidate-dialog.component.html',
  styleUrls: ['./edit-candidate-dialog.component.css']
})
export class EditCandidateDialogComponent implements OnInit {
  maxDate: Date;
  minDate: Date;

  constructor(@Inject(MAT_DIALOG_DATA) public data: CandiateShortInfo) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.maxDate.setFullYear(this.maxDate .getFullYear() - 18);
    this.minDate.setFullYear(this.minDate .getFullYear() - 80);
  }

}
