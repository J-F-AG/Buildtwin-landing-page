import { Component, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-hd-services',
  templateUrl: './hd-services.component.html',
  styleUrls: ['./hd-services.component.scss']
})

export class HdServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
    { name: 'Structural Design', img: '/assets/images/structuralDesign.png', width:'151', height: '137' },
    { name: 'Structural Solutions', img: '/assets/images/structuralSoultion.png', width:'151', height: '137' },
    { name: '3D Rebar Capabilities', img: '/assets/images/rebar.png', width:'151', height: '137' },
    { name: 'As-built Documentation', img: '/assets/images/documentation.png', width:'151', height: '137' },
    { name: 'BI Modelling', img: '/assets/images/modelling.png', width:'151', height: '137' },
    { name: 'Form Works Design', img: '/assets/images/formworks.png', width:'151', height: '137' },
    { name: 'Structural Design', img: '/assets/images/structuralDesign.png', width:'151', height: '137' },
    { name: 'Structural Solutions', img: '/assets/images/structuralSoultion.png', width:'151', height: '137' },
    { name: '3D Rebar Capabilities', img: '/assets/images/rebar.png', width:'151', height: '137' },
    { name: 'As-built Documentation', img: '/assets/images/documentation.png', width:'151', height: '137' },
    { name: 'BI Modelling', img: '/assets/images/modelling.png', width:'151', height: '137' },
    { name: 'Form Works Design', img: '/assets/images/formworks.png', width:'151', height: '137' },
  ]

  discoverServices = this.splitArray(this.servicesArray, 6);

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
}