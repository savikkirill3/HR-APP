import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {CandidateNotes} from '../notes.component';

@Component({
  selector: 'app-new-notes-dialog',
  templateUrl: './new-notes-dialog.component.html',
  styleUrls: ['./new-notes-dialog.component.css']
})
export class NewNotesDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: CandidateNotes) { }

  ngOnInit() {
  }

}
