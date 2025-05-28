import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceDetailService {
  detalMeta = {
    'shop-drawing-services': {
      title: 'BuildTwin: All-in-One Shop Drawing Services for Construction Projects',
      description: "Discover BuildTwin's comprehensive shop drawing services for steel, rebar, MEP, and more. Connect with vetted vendors, compare competitive quotes, and explore portfolios to ensure precision and efficiency in your construction projects. Get started with a free quote today!",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'http://buildtwin.dev.s3-website.ap-south-1.amazonaws.com/services/shop-drawing-services'
    }
  }
  constructor() { }
}
