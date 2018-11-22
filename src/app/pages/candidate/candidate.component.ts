import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  id: number;

  constructor(private activateRoute: ActivatedRoute) {

    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
