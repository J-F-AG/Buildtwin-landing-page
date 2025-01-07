import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { GlobalService } from 'src/app/services/GlobalService';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-hd-services-building-code-aisc',
  templateUrl: './hd-services.component.html',
  styleUrls: ['../../Home/hd-services/hd-services.component.scss','./hd-services.component.scss']
})
// './pages/Home/hd-services/hd-services.component'
export class HdServicesBuildingCodeAiscComponent implements OnInit, OnDestroy {
  @Input() page: string = '';
  activeClass: boolean = false;
  showPopup = false;
  interval: any;
  serviceSlider: OwlOptions | null = null;
  

  highlightedIndex: number = 0;
  isBrowser: boolean;
  constructor(public _languageService: LanguageService, private globalService: GlobalService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { 
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  splitArray(dataArray: any[], x: number) {
    const result = [];
    for (let i = 0; i < dataArray.length; i += x) {
      const slice = dataArray.slice(i, i + x);
      result.push(slice);
    }
    return result;
  }

  servicesArray = [
    {
      id: '1',
      name: 'Precast Detailing',
      img: '/assets/images/structuralSoultion.png',
      width: '151',
      height: '137',
      serviceId: 9,
      color: "#C3EEFF",
      // color: "#002e3b",
      // textColor: "#5395a7",
      description: "Find expert vendors for <strong>Precast Detailing Services</strong> on BuildTwin's marketplace. Access comprehensive and precise drawings for precast concrete components, ensuring seamless project execution with accurate fabrication details and international compliance."
    },

    {
      id: '2',
      name: 'Structural Steel Detailing',
      img: '/assets/images/structuralDesign.png',
      width: '151',
      height: '137',
      serviceId: 12,
      color: "#FFE2E1",
      // color: "#5dd8ad",
      // textColor: "#2e7159",
      description: "Connect with professional vendors offering <strong>Steel Detailing Services</strong> on BuildTwin. Obtain detailed shop and erection drawings for steel structures to enhance fabrication and installation efficiency, reducing errors and saving time on your projects."
    },

    {
      id: '4',
      name: 'Rebar Detailing',
      img: '/assets/images/rebar.png',
      width: '151',
      height: '137',
      serviceId: 10,
      color: "#C3EEFF",
      // color: "#5c6a6e",
      // textColor: "#2f3739",
      description: "Discover skilled vendors for <strong>Rebar Detailing Services</strong> on BuildTwin. Get precise bar bending schedules, placement drawings, and material take-offs to ensure accuracy and compliance for efficient, cost-effective reinforcement projects."
    },

    {
      id: '6',
      name: 'BIM Services',
      img: '/assets/images/modelling.png',
      width: '151',
      height: '137',
      color: "#FFE8CB",
      // color: "#fcf477",
      // textColor: "#a8a23d",
      serviceId: 11,
      description: "Explore BuildTwin's marketplace for top <strong>BIM Services</strong> vendors. Access advanced 3D modeling, clash detection, and coordination services that improve collaboration, reduce errors, and enhance efficiency across all project phases."
    },

    // { id: '3', name: 'Structural Solutions', img: '/assets/images/structuralSoultion.png', width:'151', height: '137', color: "#FFE8CB" },
    // { id: '5', name: 'As-built Documentation', img: '/assets/images/documentation.png', width:'151', height: '137', color: "#FFE2E1" },
    // { id: '7', name: 'Form Works Design', img: '/assets/images/formworks.png', width:'151', height: '137', color: "#E2EED9" },
  ]

  serviceRoutesMap = {
    9: '/services/pre-cast-detailing-services',
    10: '/services/rebar-detailing-services',
    11: '/services/bim-services',
    12: '/services/steel-detailing-services'
    // Add more serviceId to route mappings here
  };


  getServiceRoute(serviceId: number): string {
    const baseUrl = this._languageService.currentLanguage;
    return baseUrl + (this.serviceRoutesMap[serviceId] || '/services/default-page');
  }


  factorySlider: OwlOptions | null = null; 
  discoverServices = this.splitArray(this.servicesArray, 6);

  ngOnInit(): void {
    this.sliderInit();
    if (window.innerWidth < 767) {
      this.discoverServices = this.splitArray(this.servicesArray, 2);
    }
    // this.interval = setInterval(() => {
    //   this.rotateArray();
    // }, 5000);
  }
  sliderInit(){
    this.factorySlider = {
      nav: false,
      margin: 16,  // Adjust as needed
      dots: false,
      loop: true,
      autoplay: true,
      autoplayHoverPause: true,
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
        768: {
          items: 3  // 2 items for medium screens
        },
        1000: {
          items: 4  // 2 full items and a half item for larger screens
        }
      }
    };
    this.serviceSlider = {
      items: 5,
      nav: false,
      margin: 25,
      dots: false,
      loop: true,
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        740: {
          items: 3
        },
        940: {
          items: 5
        }
      },
      navText: [
        "<i class='ti ti-chevron-left'></i>",
        "<i class='ti ti-chevron-right'></i>",
      ]
    }
  }

  index = 0;

  @ViewChild(NzCarouselComponent, { static: false }) myCarousel: NzCarouselComponent;

  goTo() {
    this.myCarousel.goTo(Number(this.index));
  }

  prev() {
    this.myCarousel.pre();

  }
  next() {
    this.myCarousel.next();
  }

  call() {
    this.showPopup = true
  }

  closePopupStatus($event) {
    this.showPopup = false;
  }

  onTranslate(event: SlidesOutputData) {
    this.highlightedIndex = event.startPosition;
  }

  rotateArray() {
    const rotatedArray = this.servicesArray.slice(1).concat(this.servicesArray.slice(0, 1));
    console.log(rotatedArray);
    this.servicesArray = rotatedArray;
    this.activeClass = true;
    setTimeout(() => {
      this.activeClass = false;
    }, 2000);
  }

  scrollToSection(sectionId: string) {
    this.globalService.scrollToSection(sectionId);
  }
  getData(data: SlidesOutputData) {
    // this.activeSlides = data;
    this.highlightedIndex = data.startPosition;
    console.log(data);
  }
  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

}
