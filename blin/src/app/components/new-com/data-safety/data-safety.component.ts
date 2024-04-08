import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-data-safety',
  templateUrl: './data-safety.component.html',
  styleUrl: './data-safety.component.scss'
})
export class DataSafetyComponent {
  certificateSlide: OwlOptions = {
    nav: true,
    margin: 25,
    loop: true,
    dots: false,
    autoplay: false,
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
        items: 2
      },
      768: {
        items: 3
      },
      990: {
        items: 5
      },
      1400: {
        items: 5
      }
    }
  }

  auditSlide: OwlOptions = {
    items: 1,
    nav: true,
    loop: false,
    dots: false,
    autoplay: false,
    autoplayHoverPause: true,
    navText: [
      "<i class='ti ti-chevron-left'></i>",
      "<i class='ti ti-chevron-right'></i>",
    ]
  }
}
