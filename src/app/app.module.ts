import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module/material.module';
import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';

import { CandidatePageComponent } from './pages/candidate-page/candidate-page.component';
import { ShortInfoComponent } from './pages/candidate-page/short-info/short-info.component';
import { EditCandidateDialogComponent } from './pages/candidate-page/short-info/edit-candidate-dialog/edit-candidate-dialog.component';
import { SkillsComponent } from './pages/candidate-page/skills/skills.component';
import { ExperiencesComponent } from './pages/candidate-page/experiences/experiences.component';
import { EditComponent } from './pages/candidate-page/experiences/edit/edit.component';
import { ContactsComponent } from './pages/candidate-page/contacts/contacts.component';
import { EditContactsDialogComponent } from './pages/candidate-page/contacts/edit-contacts-dialog/edit-contacts-dialog.component';
import { CvsComponent } from './pages/candidate-page/cvs/cvs.component';
import { CvsAddComponent } from './pages/candidate-page/cvs/cvs-add/cvs-add.component';
import { NotesComponent } from './pages/candidate-page/notes/notes.component';
import { EditNotesDialogComponent } from './pages/candidate-page/notes/edit-notes-dialog/edit-notes-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    CandidatePageComponent,
    ShortInfoComponent,
    EditCandidateDialogComponent,
    SkillsComponent,
    ExperiencesComponent,
    EditComponent,
    ContactsComponent,
    EditContactsDialogComponent,
    CvsComponent,
    CvsAddComponent,
    NotesComponent,
    EditNotesDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditCandidateDialogComponent, EditContactsDialogComponent, EditComponent]
})
export class AppModule {}
