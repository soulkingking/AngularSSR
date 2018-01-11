import {Component, PLATFORM_ID, Inject, OnInit} from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {

    }
    if (isPlatformServer(this.platformId)) {

    }
  }
}
