import { Component} from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditCandidateDialogComponent } from './edit-candidate-dialog/edit-candidate-dialog.component';

// FIXME: maybe put in separate folder with models
export interface CandiateShortInfo {
  name: string;
  surname: string;
  birthday: Date;
  salaryInDollars: number;
}

@Component({
  selector: 'app-short-info',
  templateUrl: './short-info.component.html',
  styleUrls: ['./short-info.component.css']
})
export class ShortInfoComponent {
  imgSrc = 'https://assets.capitalfm.com/2018/23/lilliya-scarlett-instagram-1528814125-custom-0.png';

  // FIXME: hard typed user - CHANGE it
  candidate: CandiateShortInfo = {
    name: 'Lilliya ',
    surname: 'Scarlett ',
    birthday: new Date('11/15/1995'),
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

  onFileUpload(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    const file = inputElement.files[0];
    this.handleFileUpload(file);
    console.log(e);
  }

  private handleFileUpload(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imgSrc = reader.result as string;
    };
  }

}
