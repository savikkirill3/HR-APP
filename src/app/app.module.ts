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

@NgModule({
  declarations: [
    AppComponent,
    CandidatePageComponent,
    ShortInfoComponent,
    EditCandidateDialogComponent
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
  entryComponents: [EditCandidateDialogComponent]
})
export class AppModule {}
