import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material-module/material.module';
import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';

import { CandidatePageComponent } from './pages/candidate-page/candidate-page.component';
import { ShortInfoComponent } from './pages/candidate-page/short-info/short-info.component';
import { EditCandidateDialogComponent } from './pages/candidate-page/short-info/edit-candidate-dialog/edit-candidate-dialog.component';
import { SkillsComponent } from './pages/candidate-page/skills/skills.component';
import { ExperiencesComponent } from './pages/candidate-page/experiences/experiences.component';
import { EditComponent } from './pages/candidate-page/experiences/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatePageComponent,
    ShortInfoComponent,
    EditCandidateDialogComponent,
    SkillsComponent,
    ExperiencesComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    CustomFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditCandidateDialogComponent,
  EditComponent]
})
export class AppModule {}
