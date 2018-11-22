import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Experience} from '../experiences.component';

@Component({
  selector: 'app-new-experiences-dialog',
  templateUrl: './new-experiences-dialog.component.html',
  styleUrls: ['./new-experiences-dialog.component.css']
})
export class NewExperiencesDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Experience) { }

  ngOnInit() {
  }

}
