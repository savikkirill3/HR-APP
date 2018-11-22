import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  links: {url: string; name: string}[] = [
    {url: 'candidate', name: 'Candidates'},
    {url: 'interview', name: 'Interview'},
    {url: 'vacancy', name: 'Vacancy'},
   ];

  constructor() { }

  ngOnInit() {
  }

}
