import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatExpansionModule,
  MatCardModule,
  MatListModule,
  MatGridListModule,
  MatMenuModule,
  MatIconModule,
  MatInputModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule
  ]
})
export class MaterialModule {}
