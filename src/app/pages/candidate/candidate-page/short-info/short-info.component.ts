import { Component, Input} from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditCandidateDialogComponent } from './edit-candidate-dialog/edit-candidate-dialog.component';
import { Candidate } from 'src/app/models/candidate.model';


@Component({
  selector: 'app-short-info',
  templateUrl: './short-info.component.html',
  styleUrls: ['./short-info.component.css']
})
export class ShortInfoComponent {
  @Input() candidate: Candidate;

  constructor(public dialog: MatDialog) {}

  onOpenEditDialog() {
    const dialogRef = this.dialog.open(EditCandidateDialogComponent, {
      data: {...this.candidate}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.candidate = result;
        console.log(result);
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
      this.candidate.attachments[0].filePath = reader.result as string;
    };
  }

}
