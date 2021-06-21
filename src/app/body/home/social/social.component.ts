import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { chevronLeftIcon, chevronRightIcon } from "@progress/kendo-svg-icons"

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit, AfterViewInit {

  @ViewChild('socialbanner') socialbanner: ElementRef | undefined;
  socialWidth: any;

  icons = {right : chevronRightIcon, left:chevronLeftIcon};

  constructor() { }
 

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
   setTimeout(() =>{
      this.socialWidth = this.socialbanner?.nativeElement.offsetWidth;
   })
  }

}
