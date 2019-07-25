import { Component, OnInit } from '@angular/core';
import { TimelineMax, Linear } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isHidden = true;

  constructor() { }

  ngOnInit() {
    const header = document.querySelector(".header");
    const logo = document.querySelector(".logo");
    
    const navButtons = document.querySelectorAll(".nav-button");
    const shorMoreButton = document.querySelector(".mat-icon");


    let tl = new TimelineMax();
    tl.from(header, 1, {y: "-200"})
      .from(logo, 0.3, {y: -200,  opacity: 0});
  }

  hideOptions(event) {
    document.querySelector(".show-more-button").classList.toggle("rotate-180"); 
    this.isHidden = !this.isHidden;
  }

}
