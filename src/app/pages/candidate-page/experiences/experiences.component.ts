import {Component, OnInit} from '@angular/core';

export interface Experience {
  dataFrom: string;
  dataTo: string;
  companyName: string;
  position: string;
  achievements: string;
}

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  experience: Experience = {
    dataFrom: '01.01.2018',
    dataTo: '01.04.2018',
    companyName: 'Mifort',
    position: 'Javist',
    achievements: ''
  };

  constructor() {
  }

  ngOnInit() {
  }

}
