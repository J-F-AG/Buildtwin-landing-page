import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-fs-about',
  templateUrl: './fs-about.component.html',
  styleUrls: ['./fs-about.component.scss']
})
export class FsAboutComponent {
  aboutSlider: OwlOptions = {
    items: 1,
    nav: true,
    margin: 0,
    dots: true,
    loop: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
      "<i class='ti ti-chevron-left'></i>",
      "<i class='ti ti-chevron-right'></i>",
    ]
  }
}
