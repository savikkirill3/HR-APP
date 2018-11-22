import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { CandidateNotes } from '../notes.component';

@Component({
  selector: 'app-edit-notes-dialog',
  templateUrl: './edit-notes-dialog.component.html',
  styleUrls: ['./edit-notes-dialog.component.css']
})
export class EditNotesDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: CandidateNotes) { }

  ngOnInit() {
  }

}
