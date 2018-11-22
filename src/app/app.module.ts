import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module/material.module';
import { CustomFormsModule } from 'ng2-validation';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CandidatePageComponent } from './pages/candidate/candidate-page/candidate-page.component';
import { ShortInfoComponent } from './pages/candidate/candidate-page/short-info/short-info.component';
import { EditCandidateDialogComponent } from './pages/candidate/candidate-page/short-info/edit-candidate-dialog/edit-candidate-dialog.component';
import { SkillsComponent } from './pages/candidate/candidate-page/skills/skills.component';
import { ContactsComponent } from './pages/candidate/candidate-page/contacts/contacts.component';
import { EditContactsDialogComponent } from './pages/candidate/candidate-page/contacts/edit-contacts-dialog/edit-contacts-dialog.component';
import { CvsComponent } from './pages/candidate/candidate-page/cvs/cvs.component';
import { CvsAddComponent } from './pages/candidate/candidate-page/cvs/cvs-add/cvs-add.component';
import { CandidateComponent } from './pages/candidate/candidate.component';
import { InterviewfeedbackComponent } from './pages/interviewfeedback/interviewfeedback.component';
import { VacancyComponent } from './pages/vacancy/vacancy.component';
import { InterviewComponent } from './pages/interview/interview.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatePageComponent,
    ShortInfoComponent,
    EditCandidateDialogComponent,
    SkillsComponent,
    ContactsComponent,
    EditContactsDialogComponent,
    CvsComponent,
    CvsAddComponent, CandidateComponent, InterviewfeedbackComponent, VacancyComponent, InterviewComponent
  ],
  imports: [
    AppRoutingModule,
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
  entryComponents: [EditCandidateDialogComponent, EditContactsDialogComponent]
})
export class AppModule {}
