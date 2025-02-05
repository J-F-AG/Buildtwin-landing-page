import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-company-logos-slider',
  templateUrl: './company-logos-slider.component.html',
  styleUrl: './company-logos-slider.component.scss'
})
export class CompanyLogosSliderComponent {
  isBrowser: boolean;
  aboutSlider: OwlOptions | null = null;
  
constructor(public _languageService:LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
   }
   ngOnInit(): void {
     this.sliderInit();
   }

  sliderInit(){
    // if (this.isBrowser) {
      this.aboutSlider = {
        nav: true,
        loop: true,
        dots: false,
        autoplay: false,
        navText: [
          "<i class='ti ti-chevron-left'></i>",
          "<i class='ti ti-chevron-right'></i>",
        ],
        responsive: {
          0: {
            items: 2
          },
          415: {
            items: 3
          },
          600: {
            items: 4
          },
          990: {
            items: 5
          },
          1400: {
            items: 5
          }
        }
      }
    // }
  }
}
