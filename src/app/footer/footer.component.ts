import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {

  Url:any;
  topPx='210vh';
  constructor(private router:Router) {
       console.log(this.router.url);
       this.Url=this.router.url;
      

      if(this.Url=='/'){
        this.topPx = '210vh';
      }else if(this.Url=='/product'){
        this.topPx='unset';
      }
   }

  ngOnInit(): void {
    if(this.Url=='/'){
      this.topPx = '210vh';
    }else if(this.Url=='/product'){
      this.topPx='unset';
    }
  }

  ngAfterViewInit() {
  }

}
