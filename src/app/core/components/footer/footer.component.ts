import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    today: any = new Date();
    currentYear:number = this.today.getFullYear()
    
    scrollUp() {
       window.scroll({
         top: 0,
         left: 0,
         behavior: 'smooth',
       }); 
    }
    
    

  constructor() { }

    ngOnInit(): void {
      this.scrollUp();
  }

}
