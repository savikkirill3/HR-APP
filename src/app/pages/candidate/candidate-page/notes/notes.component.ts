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
      date: new Date('4/21/2018')
    },
    {
      Note: 'He was very stupid at interview',
      date: new Date('7/14/2018')
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

  onDelete(index) {
    this.notes.splice(index, 1);
  }

  dataFilter(type: boolean) {
    if (type === true) {
      this.notes.sort((n1, n2) => {
        return n1.date.getTime() - n2.date.getTime();
      });
    } else if (type === false) {
      this.notes.sort((n1, n2) => {
        return n2.date.getTime() - n1.date.getTime();
      });
    }
  }

}
