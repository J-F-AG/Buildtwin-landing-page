import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hd-integrations',
  templateUrl: './hd-integrations.component.html',
  styleUrls: ['./hd-integrations.component.scss']
})
export class HdIntegrationsComponent {
  integrationsList: OwlOptions | null = null; 
  isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit(): void {
    this.sliderInit()
  }
  sliderInit() {
    this.integrationsList = {
      nav: true,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      navText: [
        "<i class='ti ti-chevron-left'></i>",
        "<i class='ti ti-chevron-right'></i>",
      ],
      responsive: {
        0: {
          items: 3
        },
        400: {
          items: 5
        },
        515: {
          items: 5
        },
        768: {
          items: 7
        },
        990: {
          items: 9
        },
        1400: {
          items: 10
        }
      }
    }
  }
}
