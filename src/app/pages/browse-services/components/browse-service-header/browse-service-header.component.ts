import { Component, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-browse-service-header',
  templateUrl: './browse-service-header.component.html',
  styleUrls: ['./browse-service-header.component.scss']
})
export class BrowseServiceHeaderComponent implements OnInit {

  showPopup=false;
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
    { name: 'Precast Detailing', img: '/assets/images/structuralSoultion.png', width:'151', height: '137', serviceId: 9},
    { name: 'Structural Steel Detailing', img: '/assets/images/structuralDesign.png', width:'151', height: '137', serviceId: 12 },
    { name: 'Rebar Detailing', img: '/assets/images/rebar.png', width:'151', height: '137', serviceId: 10},
    { name: 'BIM Services', img: '/assets/images/modelling.png', width:'151', height: '137', serviceId: 11 },
    // { name: 'As-built Documentation', img: '/assets/images/documentation.png', width:'151', height: '137' },
    // { name: 'Form Works Design', img: '/assets/images/formworks.png', width:'151', height: '137' },
    // { name: 'Structural Solutions', img: '/assets/images/structuralSoultion.png', width:'151', height: '137' },
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
    return baseUrl + (this.serviceRoutesMap[serviceId] || '');
  }


  discoverServices = this.splitArray(this.servicesArray, 6);

  index = 0;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1200: {
        items: 4
      }
    },
    nav: true
  }
  ngOnInit(): void {
    if(window.innerWidth < 767) {
      this.discoverServices = this.splitArray(this.servicesArray, 2);
    }
  }

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
}
