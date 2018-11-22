import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links = [
    {url: 'interview', name: 'Interview'},
    {url: 'candidates', name: 'Candidates'},
    {url: 'vacancy', name: 'Vacancy'}
  ];
}
