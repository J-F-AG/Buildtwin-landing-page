import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-vender-details-ui',
  templateUrl: './vender-details-ui.component.html',
  styleUrls: ['./vender-details-ui.component.scss']
})
export class VenderDetailsUiComponent {

  aboutSlider: OwlOptions = {
    items: 1,
    nav: true,
    margin: 0,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayHoverPause: false,
  }
}
