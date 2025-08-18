import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.scss'
})
export class ServiceListComponent {
  @Input() hideTitle = false;
factorySlider: OwlOptions | null = null;
 isBrowser: boolean;
  constructor( @Inject(PLATFORM_ID) private platformId: Object, public _languageService: LanguageService) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  servicesArray = [

    {
      id: '4',
      name: 'Rebar Detailing',
      img: 'assets/images/rebar-detailingv2',
      width: '151',
      height: '137',
      serviceId: 10,
      color: "#C3EEFF",
      active: true,
      deliveryType: 'AI + Human Engineering',
      // color: "#5c6a6e",
      // textColor: "#2f3739",
      description: "Discover skilled vendors for <strong>Rebar Detailing Services</strong> on BuildTwin. Get precise bar bending schedules, placement drawings, and material take-offs to ensure accuracy and compliance for efficient, cost-effective reinforcement projects."
    },
    {
      id: '1',
      name: 'Precast Detailing',
      img: 'assets/images/precast-detailingv2',
      width: '151',
      height: '137',
      serviceId: 9,
      color: "#C3EEFF",
      deliveryType: 'AI + Human Engineering',
      // color: "#002e3b",
      // textColor: "#5395a7",
      description: "Find expert vendors for <strong>Precast Detailing Services</strong> on BuildTwin's marketplace. Access comprehensive and precise drawings for precast concrete components, ensuring seamless project execution with accurate fabrication details and international compliance."
    },

    {
      id: '2',
      name: 'Structural Steel Detailing',
      img: 'assets/images/structural-steel-detailingv2',
      width: '151',
      height: '137',
      serviceId: 12,
      color: "#FFE2E1",
      deliveryType: 'AI + Human Engineering',
      // color: "#5dd8ad",
      // textColor: "#2e7159",
      description: "Connect with professional vendors offering <strong>Steel Detailing Services</strong> on BuildTwin. Obtain detailed shop and erection drawings for steel structures to enhance fabrication and installation efficiency, reducing errors and saving time on your projects."
    },
    {
      id: '9',
      name: 'CAD Services',
      img: 'assets/images/cadv2',
      width: '151',
      height: '137',
      serviceId: 16,
      color: "#dfffbc",
      deliveryType: 'Human Only',
      // color: "#5dd8ad",
      // textColor: "#2e7159",
      description: "Connect with CAD Services providers on BuildTwin. Get accurate computer aided design deliverables – 2D and 3D modeling to detailed renderings to boost workflow, reduce errors and drive innovation across all phases of your project."
    },

    {
      id: '6',
      name: 'BIM Services',
      img: 'assets/images/bimv2',
      width: '151',
      height: '137',
      color: "#FFE8CB",
      deliveryType: 'AI + Human Engineering',
      // color: "#fcf477",
      // textColor: "#a8a23d",
      serviceId: 11,
      description: "Explore BuildTwin's marketplace for top <strong>BIM Services</strong> vendors. Access advanced 3D modeling, clash detection, and coordination services that improve collaboration, reduce errors, and enhance efficiency across all project phases."
    },
    {
      id: '8',
      name: 'Drafting Services',
      img: 'assets/images/drafting-servicev2',
      width: '151',
      height: '137',
      color: "#e0ffcc",
      deliveryType: 'Human Only',
      // color: "#fcf477",
      // textColor: "#a8a23d",
      serviceId: 15,
      description: "Get the best Drafting Services on BuildTwin. Get precise industry compliant technical drawings to plan, reduce revisions and ensure smooth project execution from start to finish."
    },

    // { id: '3', name: 'Structural Solutions', img: '/assets/images/structuralSoultion.png', width:'151', height: '137', color: "#FFE8CB" },
    // { id: '5', name: 'As-built Documentation', img: '/assets/images/documentation.png', width:'151', height: '137', color: "#FFE2E1" },
    // { id: '7', name: 'Form Works Design', img: '/assets/images/formworks.png', width:'151', height: '137', color: "#E2EED9" },
  ]

  serviceRoutesMap = {
    9: '/services/pre-cast-detailing-services',
    10: '/services/rebar-detailing-services',
    11: '/services/bim-services',
    12: '/services/steel-detailing-services',
    15: '/services/drafting-services',
    16: '/services/cad-services'
    // Add more serviceId to route mappings here
  };
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

getServiceRoute(serviceId: number): string {
  const baseUrl = this._languageService.currentLanguage;
  return baseUrl + (this.serviceRoutesMap[serviceId] || '/services/default-page');
}
}
