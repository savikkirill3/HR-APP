import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';
import { CandidateService } from 'src/app/services/candidate.service';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from 'src/app/models/candidate.model';

@Component({
  selector: 'app-candidate-page',
  templateUrl: './candidate-page.component.html',
  styleUrls: ['./candidate-page.component.css']
})
export class CandidatePageComponent implements OnInit {
  isAllPanelsOpened = false;
  candidate: Candidate;

  @ViewChild('myaccordion') myPanels: MatAccordion;

  constructor(
    private route: ActivatedRoute,
    private candidateService: CandidateService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.candidate = this.candidateService.getCandidate(+id);
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
