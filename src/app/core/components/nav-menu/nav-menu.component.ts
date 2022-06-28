import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  constructor(public router: Router) {}
  dyeHeaderBool: boolean = false;

  ngOnInit(): void {
    this.dyeHeaderInterval;
  }

  dyeHeaderInterval = setInterval(() => {
    if (this.positionForColoringReached(this.getWindowYPosition())) {
      return (this.dyeHeaderBool = true);
    } else {
      return (this.dyeHeaderBool = false);
    }
  }, 150);

  positionForColoringReached(windowPosition: number): boolean {
    if (windowPosition > 80) {
      return true;
    } else {
      return false;
    }
  }

  getWindowYPosition() {
    let windowPosition: number;
    windowPosition = window.scrollY;
    return windowPosition;
  }
}
