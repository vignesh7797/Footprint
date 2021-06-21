import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'footprint';

  load = true;
  innerWidth: number | undefined;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    window.location.reload();
  }

  ngOnInit(){ 
    window.scrollTo(0, 0);

    setTimeout(()=>{
      this.load = false;
    },3000)
  }
}
