import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hd-integrations',
  templateUrl: './hd-integrations.component.html',
  styleUrls: ['./hd-integrations.component.scss']
})
export class HdIntegrationsComponent {
  integrationsList: OwlOptions = {
    nav: false,
    margin: 25,
    loop: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
      "<i class='ti ti-chevron-left'></i>",
      "<i class='ti ti-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 2
      },
      515: {
        items: 3
      },
      768: {
        items: 4
      },
      990: {
        items: 5
      },
      1400: {
        items: 6
      }
    }
  }
}
