import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatExpansionModule,
  MatCardModule,
  MatListModule,
  MatGridListModule,
  MatMenuModule,
  MatIconModule,
  MatInputModule
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
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule
  ]
})
export class MaterialModule {}
