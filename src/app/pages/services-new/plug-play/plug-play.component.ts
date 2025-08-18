import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-plug-play',
  // standalone: true,
  // imports: [],
  templateUrl: './plug-play.component.html',
  styleUrl: './plug-play.component.scss'
})
export class PlugPlayNewComponent {
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
      768: {
        items: 5
      },
      990: {
        items: 6
      },
      1400: {
        items: 6
      },
      515: {
        items: 4
      }
    }
  }
}
