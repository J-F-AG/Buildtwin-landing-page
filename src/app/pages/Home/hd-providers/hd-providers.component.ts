import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hd-providers',
  templateUrl: './hd-providers.component.html',
  styleUrl: './hd-providers.component.scss'
})
export class HdProvidersComponent {

  factorySlider: OwlOptions = {
    nav: false,
    margin: 30,  // Adjust as needed
    dots: false,
    loop: true,
    autoplay: true,
    autoplayHoverPause: false,
    navText: [
			"<i class='ti ti-chevron-left'></i>",
			"<i class='ti ti-chevron-right'></i>",
		],
    stagePadding: 0,  // Adjust padding for the "half" item effect
    responsive: {
      0: {
        items: 1  // 1 item for small screens
      },
      400: {
        items: 1  // 1 item for slightly larger screens
      },
      740: {
        items: 3  // 2 items for medium screens
      },
      940: {
        items: 4  // 2 full items and a half item for larger screens
      }
    }
  };
}
