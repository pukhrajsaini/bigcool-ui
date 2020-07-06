import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }

  experts = [
    {
      name: 'suresh saini',
      expertise : 'Installation expert',
      pImg: '/assets/images/suresh.jpg'
    },
    {
      name: 'dinesh saini',
      expertise : 'repairing expert',
      pImg: '/assets/images/dinesh.jpg'
    },
    {
      name: 'omprakash saini',
      expertise : 'Installation expert',
      pImg: '/assets/images/omprakash.jpg'
    }
  ];

  ngOnInit(): void {
  }

}
