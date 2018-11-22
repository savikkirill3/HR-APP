import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import {EditNotesDialogComponent} from './edit-notes-dialog/edit-notes-dialog.component';
import {NewNotesDialogComponent} from './new-notes-dialog/new-notes-dialog.component';

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

  notes: CandidateNotes[] = [
    {
      Note: 'He was very smart at interview',
      date: new Date('04/21/2018')
    },
    {
      Note: 'He was very stupid at interview',
      date: new Date('07/14/2018')
    }];

  constructor(public dialog: MatDialog) { }

  onOpenEditDialog(index: number) {
    const dialogRed = this.dialog.open(EditNotesDialogComponent, {
      data: {...this.notes[index]}
    });

    dialogRed.afterClosed().subscribe(result => {
      if (result) {
        this.notes[index] = result;
      }
    });
  }

  onOpenNewDialog() {
    const dialogNew = this.dialog.open(NewNotesDialogComponent, {
      data: {...this.notes}
    });

    dialogNew.afterClosed().subscribe(result => {
      if (result) {
        this.notes.push(result);
      }
    });
  }

}
