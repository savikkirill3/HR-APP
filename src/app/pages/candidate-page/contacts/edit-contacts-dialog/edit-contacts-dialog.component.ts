import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import { CandidatContacts } from '../contacts.component';

@Component({
  selector: 'app-edit-contacts-dialog',
  templateUrl: './edit-contacts-dialog.component.html',
  styleUrls: ['./edit-contacts-dialog.component.css']
})
export class EditContactsDialogComponent implements OnInit {

  contactsFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(@Inject(MAT_DIALOG_DATA) public data: CandidatContacts) { }

  ngOnInit() {
  }

}
