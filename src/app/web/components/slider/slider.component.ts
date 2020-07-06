import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slider: string[] = [
    '/assets/images/image1.jpg',
    '/assets/images/image2.jpg',
    '/assets/images/image4.jpg',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
