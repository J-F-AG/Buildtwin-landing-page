import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-browse-services-main',
  templateUrl: './browse-services-main.component.html',
  styleUrls: ['./browse-services-main.component.scss']
})
export class BrowseServicesMainComponent implements OnInit {
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
      }
    },
    nav: true
  }
  _jfOneHeaderService:any;
  constructor(
    private injector: Injector
  ) {
    // document.body.classList.add('add-top-space');
  }

  ngOnInit(): void {
  }
  splitArray(dataArray: any[], x: number) {
    const result = [];
    for (let i = 0; i < dataArray.length; i += x) {
      const slice = dataArray.slice(i, i + x);
      result.push(slice);
    }
    console.log({ result });

    return result;
  }

  // discoverProjectSection
  projectsArray = [
    { img: 'assets/images/hall-construction.png', category: 'MEP', projectTitle: 'Logistics Hall Construction', company: 'HBM Darmstadt', companyIcon: 'assets/images/gpcEngineering.png', serviceCompany: 'GPC Engineering', serviceCompanyIcon: 'assets/images/gbcEngineering.png', width:'57', height:'30', serviceDescription: "1 million Ђ construction costs electrical | approx. 22,000 mІ", link: 'link' },
    { img: 'assets/images/high-building.png', category: 'Structural', projectTitle: 'High-Rise Buildings', company: 'FOURFrankfurt', companyIcon: 'assets/images/cpbContractors.png', serviceCompany: 'CPB Contractors', serviceCompanyIcon: 'assets/images/cbpContractors.png', width:'34', height:'30', serviceDescription: "1 million Ђ construction costs electrical | approx. 22,000 mІ", link: 'link' },
    { img: 'assets/images/modular-dormito.png', category: 'MEP', projectTitle: 'Construction Modular Dormitory', company: 'FOURFrankfurt', companyIcon: 'assets/images/gpcEngineering.png', serviceCompany: 'GPC Engineering', serviceCompanyIcon: 'assets/images/gbcEngineering.png', width:'57', height:'30', serviceDescription: "1 million Ђ construction costs electrical | approx. 22,000 mІ", link: 'link' },
    { img: 'assets/images/hall-construction.png', category: 'MEP', projectTitle: 'Logistics Hall Construction', company: 'HBM Darmstadt', companyIcon: 'assets/images/cpbContractors.png', serviceCompany: 'CPB Contractors', serviceCompanyIcon: 'assets/images/cbpContractors.png', width:'34', height:'30', serviceDescription: "1 million Ђ construction costs electrical | approx. 22,000 mІ", link: 'link' },
    { img: 'assets/images/high-building.png', category: 'Structural', projectTitle: 'High-Rise Buildings', company: 'FOURFrankfurt', companyIcon: 'assets/images/gpcEngineering.png', serviceCompany: 'CPB Contractors', serviceCompanyIcon: 'assets/images/gbcEngineering.png', width:'57', height:'30', serviceDescription: "1 million Ђ construction costs electrical | approx. 22,000 mІ", link: 'link' },
    { img: 'assets/images/modular-dormito.png', category: 'MEP', projectTitle: 'Construction Modular Dormitory', company: 'FOURFrankfurt', companyIcon: 'assets/images/cpbContractors.png', serviceCompany: 'GPC Engineering', serviceCompanyIcon: 'assets/images/cbpContractors.png', width:'34', height:'30', serviceDescription: "1 million Ђ construction costs electrical | approx. 22,000 mІ", link: 'link' },
    { img: 'assets/images/modular-dormito.png', category: 'MEP', projectTitle: 'Construction Modular Dormitory', company: 'HBM Darmstadt', companyIcon: 'assets/images/gpcEngineering.png', serviceCompany: 'CPB Contractors', serviceCompanyIcon: 'assets/images/gbcEngineering.png', width:'57', height:'30', serviceDescription: "1 million Ђ construction costs electrical | approx. 22,000 mІ", link: 'link' },
    { img: 'assets/images/hall-construction.png', category: 'MEP', projectTitle: 'Logistics Hall Construction', company: 'HBM Darmstadt', companyIcon: 'assets/images/cpbContractors.png', serviceCompany: 'GPC Engineering', serviceCompanyIcon: 'assets/images/cbpContractors.png', width:'34', height:'30', serviceDescription: "1 million Ђ construction costs electrical | approx. 22,000 mІ", link: 'link' },

  ]

  discoverProjects = this.splitArray(this.projectsArray, 4);

  index = 0;

  @ViewChild(NzCarouselComponent, { static: false }) myCarousel: NzCarouselComponent;

  goTo() {
    this.myCarousel.goTo(Number(this.index));
  }

  prev() {
    this.myCarousel.pre();

  }
  next() {
    console.log(this.myCarousel.activeIndex)
    this.myCarousel.next();
  }


  //specialProjectsSection
  slides = [
    {
      images: [
        {
          src: 'assets/images/data-center.png',
          title: 'Data Center',
          description: '50+ Vendors',
        },
        {
          src: 'assets/images/bridges.png',
          title: 'BRIDGES',
          description: '20+ Vendors',
        },
        { src: 'assets/images/hospitals.png', title: 'HOSPITALS', description: '10+ Vendors' },
        { src: 'assets/images/airports.png', title: 'AIRPORTS', description: '10+ Vendors' },
        { src: 'assets/images/industrial-buildings.png', title: 'INDUSTRIAL BUILDINGS', description: '10+ Vendors' },
        { src: 'assets/images/pre-cast.png', title: 'PRE-CAST', description: '10+ Vendors' },
      ],
    },
    // {
    //   images: [
    //     {
    //       src: 'assets/images/data-center.jpg',
    //       title: 'Another Data Center',
    //       description: '60+ Vendors',
    //     },
    //     {
    //       src: 'assets/images/power-plant.jpg',
    //       title: 'Another Power Plant',
    //       description: '25+ Vendors',
    //     },
    //     {
    //       src: 'assets/images/data-center.jpg',
    //       title: 'Another Factory',
    //       description: '15+ Vendors',
    //     },
    //   ],
    // },
  ];

  currentIndex = 0;

  get transformStyle() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  prevSlide() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.slides.length - 1;
  }

  nextSlide() {
    this.currentIndex =
      this.currentIndex < this.slides.length - 1 ? this.currentIndex + 1 : 0;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  //solution section
  countryArray = [
    {
      image: 'assets/images/us-flag.png',
      label: 'United States',
      value: 'UnitedStates',
      currency: 'IBC'
    },
    {
      image: 'assets/images/aus-flag.png',
      label: 'Australia',
      value: 'Australia',
      currency: 'NCC'
    },
    {
      image: 'assets/images/eu-flag.png',
      label: 'European Union',
      value: 'EuropeanUnion',
      currency: 'EC'
    },
    {
      image: 'assets/images/uk-flag.png',
      label: 'United Kingdom',
      value: 'UK',
      currency: 'BS'
    },
    {
      image: 'assets/images/canada-flag.png',
      label: 'Canada',
      value: 'Canada',
      currency: 'CBC'
    },
    {
      image: 'assets/images/india-flag.png',
      label: 'India',
      value: 'India',
      currency: 'INR'
    }
  ]
  selectedCountry = this.countryArray[0];
  selectCountry(selectedOption: any) {
    this.selectedCountry = this.countryArray.find(e => e.value === selectedOption);
  }

  precastServices = [
    {
      label: 'BIM',
      value: 'BIM'
    },
    {
      label: 'BIM - Concrete',
      value: 'BIM Concrete'
    },
    {
      label: 'QS',
      value: 'QS'
    },
    {
      label: 'MEP',
      value: 'MEP'
    },
    {
      label: 'Independent',
      value: 'Independent'
    },
  ]

  selectedPrecastServices = this.precastServices[0];
  selectService(selectedOption: any) {
    this.selectedPrecastServices = this.precastServices.find(e => e.value === selectedOption);
  }

  precastList = [
    {
      svgName: 'bridge-icon',
      label: 'Bridge',
      value: 'bridge'
    },
    {
      svgName: 'tunnels-icon',
      label: 'Tunnels',
      value: 'tunnels'
    },
    {
      svgName: 'hospitality-icon',
      label: 'Hospitality',
      value: 'hospitality'
    },
    {
      svgName: 'marine-icon',
      label: 'Marine Structures',
      value: 'marine structures'
    },
    {
      svgName: 'powerPlants-icon',
      label: 'Power Plants',
      value: 'power plants'
    },
    {
      svgName: 'city-icon',
      label: 'City Development',
      value: 'city development'
    },
    {
      svgName: 'industrial-icon',
      label: 'Industrial',
      value: 'industrial'
    },
    {
      svgName: 'metro-icon',
      label: 'Metro Rail',
      value: 'metro rail'
    },
    {
      svgName: 'healthcare-icon',
      label: 'Healthcare',
      value: 'healthcare'
    },
    {
      svgName: 'roads-icon',
      label: 'Roads',
      value: 'roads'
    },
    {
      svgName: 'school-icon',
      label: 'School',
      value: 'school'
    },
    {
      svgName: 'highSpeedRail-icon',
      label: 'High Speed Rail',
      value: 'high speed rail'
    },
    {
      svgName: 'residential-icon',
      label: 'Residential',
      value: 'residential'
    }
  ]
  selectedPrecast = this.precastList[0];

  selectPrecast(selectedOption: any) {
    this.selectedPrecast = this.precastList.find(e => e.value === selectedOption);
  }
  ngOnDestroy() {
    // document.body.classList.remove('add-top-space');
  }


}
