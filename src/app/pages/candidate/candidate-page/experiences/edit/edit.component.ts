import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Experience } from '../experiences.component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  date = new FormControl(new Date());

  constructor(@Inject(MAT_DIALOG_DATA) public data: Experience) { }
  ngOnInit() {
  }
}
