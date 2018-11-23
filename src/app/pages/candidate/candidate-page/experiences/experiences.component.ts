import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {EditComponent} from './edit/edit.component';
import {NewExperiencesDialogComponent} from './new-experiences-dialog/new-experiences-dialog.component';

export interface Experience {
  dateFrom: Date;
  dateTo: Date;
  companyName: string;
  position: string;
  achievements: string;
}

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {

  experiences: Experience[] = [
    {
      dateFrom: new Date('11/11/2015'),
      dateTo: new Date('11/15/2015'),
      companyName: 'Mifort',
      position: 'Frontend developer',
      achievements: 'Good job'
    },
    {
    dateFrom: new Date('11/11/2015'),
    dateTo: new Date('11/15/2018'),
    companyName: 'Mifort',
    position: 'Frontend developer',
    achievements: ''
  }];

  constructor(public dialog: MatDialog) {
  }

  onOpenEditDialog(index: number) {
    const dialogRed = this.dialog.open(EditComponent, {
      data: {...this.experiences[index]}
    });

    dialogRed.afterClosed().subscribe(result => {
      if (result) {
        this.experiences[index] = result;
      }
    });
  }

  onOpenNewDialog() {
    const dialogNew = this.dialog.open(NewExperiencesDialogComponent, {
      data: {...this.experiences}
    });

    dialogNew.afterClosed().subscribe(result => {
      if (result) {
        this.experiences.push(result);
      }
    });
  }

  onDelete(index) {
    this.experiences.splice(index, 1);
  }

}
