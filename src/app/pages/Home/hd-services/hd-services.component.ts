import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-hd-services',
  templateUrl: './hd-services.component.html',
  styleUrls: ['./hd-services.component.scss']
})

export class HdServicesComponent implements OnInit, OnDestroy {
  showPopup=false;
  interval: any;
  serviceSlider: OwlOptions = {
    items: 5,
		nav: false,
		margin: 25,
		dots: false,
		loop: true,
		autoplay: false,
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

  highlightedIndex: number = 0;
  
  constructor(public _languageService: LanguageService) { }

  splitArray(dataArray: any[], x: number) {
    const result = [];
    for (let i = 0; i < dataArray.length; i += x) {
      const slice = dataArray.slice(i, i + x);
      result.push(slice);
    }
    return result;
  }

  servicesArray = [
    { id: '1', name: 'Precast Detailing', img: '/assets/images/structuralSoultion.png', width:'151', height: '137', serviceId: 9, color: "#C3EEFF" },
    { id: '2', name: 'Structural Steel Detailing', img: '/assets/images/structuralDesign.png', width:'151', height: '137', serviceId: 12, color: "#FFE2E1" },
    { id: '3', name: 'Structural Solutions', img: '/assets/images/structuralSoultion.png', width:'151', height: '137', color: "#FFE8CB" },
    { id: '4', name: 'Rebar Detailing', img: '/assets/images/rebar.png', width:'151', height: '137', serviceId: 10, color: "#C3EEFF" },
    { id: '5', name: 'As-built Documentation', img: '/assets/images/documentation.png', width:'151', height: '137', color: "#FFE2E1" },
    { id: '6', name: 'BIM Services', img: '/assets/images/modelling.png', width:'151', height: '137', color: "#FFE8CB", serviceId: 11 },
    { id: '7', name: 'Form Works Design', img: '/assets/images/formworks.png', width:'151', height: '137', color: "#E2EED9" },
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


  discoverServices = this.splitArray(this.servicesArray, 6);

  ngOnInit(): void {
    if(window.innerWidth < 767) {
      this.discoverServices = this.splitArray(this.servicesArray, 2);
    }
    this.interval = setInterval(() => {
      this.rotateArray();
    }, 5000);
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

  call(){
    this.showPopup =true
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
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

}
