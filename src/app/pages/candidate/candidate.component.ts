import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  candidateId: number;

  constructor(private activateRoute: ActivatedRoute) {

    this.candidateId = activateRoute.snapshot.params['candidateId'];
  }

  ngOnInit() {
  }

}
