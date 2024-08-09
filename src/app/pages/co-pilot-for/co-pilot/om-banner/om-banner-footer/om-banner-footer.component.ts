import { Component, HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-om-banner-footer',
  templateUrl: './om-banner-footer.component.html',
  styleUrl: './om-banner-footer.component.scss'
})
export class OmBannerFooterComponent {
  integrationsList: OwlOptions = {
    nav: false,
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
        items: 1
      },
      515: {
        items: 3
      },
      768: {
        items: 4
      },
      990: {
        items: 6
      },
      1400: {
        items: 6
      }
    }
  }
}
