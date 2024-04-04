import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-vender-details',

  templateUrl: './vender-details.component.html',
  styleUrl: './vender-details.component.scss'
})
export class VenderDetailsComponent {
  reviewsSlides: OwlOptions = {
    items: 6,
nav: true,
margin: 0,
dots: false,
loop: true,
autoplay: false,
autoplayHoverPause: false,
navText: [
  "<i class='ti ti-chevron-left'></i>",
  "<i class='ti ti-chevron-right'></i>",
]
}

}
