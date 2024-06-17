import { Component, HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-om-banner-footer',
  templateUrl: './om-banner-footer.component.html',
  styleUrl: './om-banner-footer.component.scss'
})
export class OmBannerFooterComponent {

  reviewsSlides: OwlOptions = {
    items: 6,
    nav: true,
    margin: 0,
    dots: false,
    loop: true,
    autoWidth: true,
    autoplay: false,
    autoplayHoverPause: false,

    navText: [
      "<i class='ti ti-chevron-left'></i>",
      "<i class='ti ti-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 2
      },
      515: {
        items: 1
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
