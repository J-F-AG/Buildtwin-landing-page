import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-company-logos-slider',
  templateUrl: './company-logos-slider.component.html',
  styleUrl: './company-logos-slider.component.scss'
})
export class CompanyLogosSliderComponent {
  @Input() bg: boolean = true;
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  @ViewChild('carouselParent', { static: false }) carouselParent!: ElementRef;
  isBrowser: boolean;
  aboutSlider: OwlOptions | null = null;
  partners = [
    { logo: 'assets/images/partner/logo1.png', width: 35, height: 39, alt: 'logo1' },
    { logo: 'assets/images/partner/logo2.png', width: 30, height: 30, alt: 'logo2' },
    { logo: 'assets/images/partner/logo3.png', width: 60, height: 16, alt: 'logo3' },
    { logo: 'assets/images/partner/logo4.png', width: 50, height: 19, alt: 'logo4' },
    { logo: 'assets/images/partner/logo5.png', width: 70, height: 31, alt: 'logo5' },
    { logo: 'assets/images/partner/logo6.png', width: 70, height: 24, alt: 'logo6' },
    { logo: 'assets/images/partner/logo7.png', width: 70, height: 24, alt: 'logo6' },
    { logo: 'assets/images/partner/logo8.png', width: 70, height: 24, alt: 'logo6' },
    { logo: 'assets/images/partner/logo9.png', width: 70, height: 24, alt: 'logo6' }
  ];
  isAnimationEnabled = false;
constructor(public _languageService:LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
   }
   ngOnInit(): void {
     this.sliderInit();
   }

   ngAfterViewInit() {
    this.checkAnimation();
  }

  checkAnimation() {
    if (this.carousel) {
      const carouselWidth = this.carousel.nativeElement.scrollWidth;
      const carouselParentWidth = this.carouselParent.nativeElement.clientWidth;
      console.log(carouselParentWidth)
      console.log(carouselWidth)
      // const windowWidth = window.innerWidth;
      this.isAnimationEnabled = carouselWidth > carouselParentWidth;
    }
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
