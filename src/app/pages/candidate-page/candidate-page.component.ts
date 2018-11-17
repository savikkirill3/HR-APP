import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';

@Component({
  selector: 'app-candidate-page',
  templateUrl: './candidate-page.component.html',
  styleUrls: ['./candidate-page.component.css']
})
export class CandidatePageComponent implements OnInit {
  isAllPanelsOpened = false;

  @ViewChild('myaccordion') myPanels: MatAccordion;

  constructor() { }

  ngOnInit() {
  }

  openAll() {
    this.myPanels.openAll();
    this.isAllPanelsOpened = true;
  }

  closeAll() {
    this.myPanels.closeAll();
    this.isAllPanelsOpened = false;
  }

  onPanelOpened() {
    this.isAllPanelsOpened = true;
  }

  onPanelClosed() {
    this.isAllPanelsOpened = false;
  }

}
