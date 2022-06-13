import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
  
    constructor() { }

  
  IMAGES = [
    'assets/images/child-gb1c29a2ff_1280.jpg',
    'assets/images/notebook-gdad75738d_1280.jpg',
  ];
  headlines = ['Born to code', 'Bringing Engineering to the next Level'];

  currentImage: number = 0;
  showImage: boolean = true;
  showHeadline: boolean = true;

  ngOnInit():void {
    this.updateImage();
  }

  updateImage():void {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.IMAGES.length;
      this.showImage = false;
      this.showHeadline = false;
      setTimeout(() => {
        this.showImage = true;
        this.showHeadline = true;
      }, 50);
    }, 5000);
  }
}
