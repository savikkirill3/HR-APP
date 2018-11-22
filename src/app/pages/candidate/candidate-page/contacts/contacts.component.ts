import { Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {EditContactsDialogComponent} from './edit-contacts-dialog/edit-contacts-dialog.component';



export interface CandidatContacts {
  Email: contactInfo.Email;
  Phone: contactInfo.Phone;
  Skype: contactInfo.Skype;
  contactDetails: string;
}

export enum contactInfo {
  Email = 'kastys1@yandex.ru',
  Phone = '375336425527',
  Skype = 'kastys9'
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent {

  contacts: CandidatContacts = {
    Email: contactInfo.Email,
    Phone: contactInfo.Phone,
    Skype: contactInfo.Skype,
    contactDetails: 'Petya'
};

  constructor(public dialog: MatDialog) { }

  onOpenEditDialog() {
    const dialogRed = this.dialog.open(EditContactsDialogComponent, {
      data: {...this.contacts}
    });

    dialogRed.afterClosed().subscribe(result => {
      if (result) {
        this.contacts = result;
      }
    });
  }

}
