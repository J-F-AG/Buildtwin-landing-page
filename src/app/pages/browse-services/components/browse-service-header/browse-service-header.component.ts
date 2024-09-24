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
    { name: 'Structural Design', img: '/assets/images/structuralDesign.png', width:'151', height: '137' },
    { name: 'PRE-CAST', img: '/assets/images/structuralSoultion.png', width:'151', height: '137', serviceId: 9},
    { name: '3D Rebar Capabilities', img: '/assets/images/rebar.png', width:'151', height: '137' },
    { name: 'As-built Documentation', img: '/assets/images/documentation.png', width:'151', height: '137' },
    { name: 'BI Modeling', img: '/assets/images/modelling.png', width:'151', height: '137' },
    { name: 'Form Works Design', img: '/assets/images/formworks.png', width:'151', height: '137' },
    { name: 'Structural Design', img: '/assets/images/structuralDesign.png', width:'151', height: '137' },
    { name: 'Structural Solutions', img: '/assets/images/structuralSoultion.png', width:'151', height: '137' },
    { name: '3D Rebar Capabilities', img: '/assets/images/rebar.png', width:'151', height: '137' },
    { name: 'As-built Documentation', img: '/assets/images/documentation.png', width:'151', height: '137' },
    { name: 'BI Modeling', img: '/assets/images/modelling.png', width:'151', height: '137' },
    { name: 'Form Works Design', img: '/assets/images/formworks.png', width:'151', height: '137' },
  ]

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
        items: 5
      },
      1200: {
        items: 6
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
