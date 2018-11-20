import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {EditComponent} from './edit/edit.component';

export interface Experience {
  dateFrom: string;
  dateTo: string;
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

  experience: Experience = {
    dateFrom: '01.01.2018',
    dateTo: '01.04.2018',
    companyName: 'Mifort',
    position: 'Javist',
    achievements: ''
  };

  constructor(public dialog: MatDialog) {
  }

  onOpenEditDialog() {
    const dialogRed = this.dialog.open(EditComponent, {
      data: {...this.experience}
    });

    dialogRed.afterClosed().subscribe(result => {
      if (result) {
        this.experience = result;
      }
    });
  }

}
