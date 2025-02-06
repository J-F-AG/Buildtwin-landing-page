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
 carouselData = [
  {
    route: '/software/structural-steel-detailing',
    title: 'Structural Steel Detailing',
    description: 'Collaborate with leading structural steel detailers using Tekla Structures and SDS/2',
    img: 'assets/images/global-standards1',
    img2x: 'assets/images/global-standards1@2x',
    alt: 'Structural Steel Detailing',
    class: ''
  },
  {
    route: '/software/architecture-design-services',
    title: 'Architecture & Structural Design',
    description: 'Collaborate with expert architecture & structural designers using Autodesk Revit and ALLPLAN',
    img: 'assets/images/global-standards2',
    img2x: 'assets/images/global-standards2@2x',
    alt: 'Architecture & Structural Design',
    class: ''
  },
  {
    route: '/building-code/aisc',
    title: 'AISC Building Code',
    description: 'Code of Standard Practice for the Steel Industry',
    img: 'assets/images/global-standards3',
    img2x: 'assets/images/global-standards3@2x',
    alt: 'AISC Building Code',
    class: 'active'
  },
  {
    route: '/building-code/eurocode',
    title: 'Eurocodes Building Standards',
    description: 'Streamline your project compliance with trusted vendors well-versed in Eurocode standards.',
    img: 'assets/images/global-standards4',
    img2x: 'assets/images/global-standards4@2x',
    alt: 'Eurocodes Building Standards',
    class: 'green'
  }
];
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
      },
      1024: {
        items: 4  // 2 full items and a half item for larger screens
      },
      1500: {
        items: 5  // 2 full items and a half item for larger screens
      }
    }
  };
}

}
