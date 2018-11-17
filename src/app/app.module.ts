import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material-module/material.module';

import { AppComponent } from './app.component';

import { CandidatePageComponent } from './pages/candidate-page/candidate-page.component';
import { ShortInfoComponent } from './pages/candidate-page/short-info/short-info.component';

@NgModule({
  declarations: [AppComponent, CandidatePageComponent, ShortInfoComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, FlexLayoutModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
