import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import {EditNotesDialogComponent} from './edit-notes-dialog/edit-notes-dialog.component';

export interface CandidateNotes {
  Note: string;
  date: Date;
}

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  note: CandidateNotes = {
    Note: '',
    date: new Date('04/14/2018')
}

  constructor(public dialog: MatDialog) { }

  onOpenEditDialog() {
    const dialogRed = this.dialog.open(EditNotesDialogComponent, {
      data: {...this.note}
    });

    dialogRed.afterClosed().subscribe(result => {
      if (result) {
        this.note = result;
      }
    });
  }

}
