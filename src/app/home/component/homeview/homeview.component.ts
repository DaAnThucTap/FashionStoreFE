import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrl: './homeview.component.css'
})
export class HomeviewComponent implements OnInit {

  constructor (private router : Router ,@Inject(PLATFORM_ID) private platformId: Object){}

  currentView = "";

activeButton(ButtonActive:string,firtUrl:string) {
  if(firtUrl !=""){
   
    this.currentView = firtUrl
  } else {
    this.currentView = ButtonActive;
  }
  console.log(this.currentView )
}

ngOnInit(): void {
  if (isPlatformBrowser(this.platformId)) {
    const screenWidth = window.innerWidth;
 
  this.activeButton('',window.location.pathname.split("/")[3]) 

  }

}
}
