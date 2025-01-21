import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-global-standards',
  templateUrl: './global-standards.component.html',
  styleUrl: './global-standards.component.scss'
})
export class GlobalStandardsComponent {
factorySlider: OwlOptions | null = null;
 isBrowser: boolean;
  constructor( @Inject(PLATFORM_ID) private platformId: Object, public _languageService:LanguageService) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
ngOnInit(): void {

  this.sliderInit()
}

sliderInit() {
  this.factorySlider = {
    nav: true,
    margin: 16,  // Adjust as needed
    dots: false,
    // loop: true,
    // autoplay: true,
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
      600: {
        items: 2  // 1 item for slightly larger screens
      },
      740: {
        items: 3  // 2 items for medium screens
      },
      940: {
        items: 3  // 2 full items and a half item for larger screens
      }
    }
  };
}

}
