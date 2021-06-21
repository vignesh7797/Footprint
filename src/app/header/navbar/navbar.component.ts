import { Component, HostListener, OnInit } from '@angular/core';

import { cartIcon } from "@progress/kendo-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logo = "../../../assets/svg/logo.svg";
  logo_lg = "../../../assets/svg/logo-lg.svg";

  icons = {cart : cartIcon};



  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
      {
          document.getElementById('appbar')?.classList.add('k-appbar-primary');
          document.getElementById('appbar')?.classList.remove('k-appbar-inherit');
      }
      else
      {
        document.getElementById('appbar')?.classList.remove('k-appbar-primary');
        document.getElementById('appbar')?.classList.add('k-appbar-inherit');
      }
                    }

  constructor() { }

  ngOnInit(): void {
  }

}
