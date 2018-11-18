import { Component} from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditCandidateDialogComponent } from './edit-candidate-dialog/edit-candidate-dialog.component';

// FIXME: maybe put in separate folder with models
export interface CandiateShortInfo {
  name: string;
  surname: string;
  birthday: string;
  salaryInDollars: number;
}

@Component({
  selector: 'app-short-info',
  templateUrl: './short-info.component.html',
  styleUrls: ['./short-info.component.css']
})
export class ShortInfoComponent {
  // FIXME: hard typed user - CHANGE it
  candidate: CandiateShortInfo = {
    name: 'Brad',
    surname: 'Pitt',
    birthday: '',
    salaryInDollars: 500
  };

  constructor(public dialog: MatDialog) {}

  onOpenEditDialog() {
    const dialogRed = this.dialog.open(EditCandidateDialogComponent, {
      data: {...this.candidate}
    });

    dialogRed.afterClosed().subscribe(result => {
      if (result) {
        this.candidate = result;
      }
    });
  }

}


//   id
// name
// surname
// birthday
// salaryInDollars
