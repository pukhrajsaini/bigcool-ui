import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('drawer') public drawer;
  constructor(private $elRef: ElementRef<HTMLElement>) { }
  ngOnInit(): void {
  }


  onNavigate(id: string) {
    const parent = this.$elRef.nativeElement;
    const target: HTMLElement = parent.querySelector(`#${id}`);
    window.scrollTo({
      behavior: 'smooth',
      top: target.offsetTop - 64,
    });
    this.drawer.close();
  }

}
