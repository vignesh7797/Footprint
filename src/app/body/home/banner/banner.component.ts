import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, AfterViewInit{

  maxWidth!: number;

  items =[
    {title:'banner 1', url:'../../../../assets/img/banner1.png'}, 
    {title:'banner 2', url:'../../../../assets/img/banner2.png'},
    {title:'banner 3', url:'../../../../assets/img/banner3.png'},
  ];
  width ='99vw';
  height = '85vh'

  constructor() { }

  ngOnInit(): void {
    this.maxWidth = window.innerWidth;

    if(this.maxWidth <= 500){
      this.items =[
        {title:'banner 1', url:'../../../../assets/img/banner-mob-1.png'}, 
        {title:'banner 2', url:'../../../../assets/img/banner-mob-2.png'},
        {title:'banner 3', url:'../../../../assets/img/banner-mob-3.png'},
      ];
    }
  }

  @ViewChild("sv") private scrollView:any;
  public paused = false;
  private interval:any;

  public ngAfterViewInit() {
    this.interval = setInterval(() => {
      if (!this.paused) {
        this.scrollView.next();
      }
    }, 3000);
  }

  public ngOnDestroy() {
    clearInterval(this.interval);
  }

}
