import { Component, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-hd-services',
  templateUrl: './hd-services.component.html',
  styleUrls: ['./hd-services.component.scss']
})

export class HdServicesComponent implements OnInit {
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
    { name: 'Structural Steel Detailing', img: '/assets/images/structuralDesign.png', width:'151', height: '137' },
    { name: 'Structural Solutions', img: '/assets/images/structuralSoultion.png', width:'151', height: '137' },
    { name: 'Rebar Detailing', img: '/assets/images/rebar.png', width:'151', height: '137', serviceId: 10},
    { name: 'As-built Documentation', img: '/assets/images/documentation.png', width:'151', height: '137' },
    { name: 'BIM Services', img: '/assets/images/modelling.png', width:'151', height: '137' },
    { name: 'Form Works Design', img: '/assets/images/formworks.png', width:'151', height: '137' },
  ]

  serviceRoutesMap = {
    9: '/services/pre-cast-detailing-services',
    10: '/services/rebar-detailing-services',
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
}
