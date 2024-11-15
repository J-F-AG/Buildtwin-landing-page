import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID  } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-bim-usa-banner',
  // standalone: true,
  // imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})

export class BimUsaBannerComponent {
  cities = ['Arizona', 'New York', 'Texas', 'Pennsylvania', 'Florida', 'California'];
  currentCity: string = this.cities[0];
  // private cityIndex = 0;
  // private citySubscription: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // this.citySubscription = setInterval(() => {
      //   this.cityIndex = (this.cityIndex + 1) % this.cities.length; // Loop back to the first city
      //   this.currentCity = this.cities[this.cityIndex];
      // }, 2000);
    }
  }

  ngOnDestroy(): void {
    // if (this.citySubscription) {
    //   clearInterval(this.citySubscription)
    // }
  }
  
}
