import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { getDate } from 'date-fns';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-drawings',
  templateUrl: './drawings.component.html',
  styleUrl: './drawings.component.scss'
})
export class DrawingsComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

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
      { img: 'assets/images/drawing1.jpg', category: 'MEP', projectTitle: 'Logistics Hall Construction', company: 'HBM Darmstadt', companyIcon: 'assets/images/gpcEngineering.png', serviceCompany: 'GPC Engineering', serviceCompanyIcon: 'assets/images/drawingLogoImg2.png', width:'84', height:'44', serviceDescription: "Structural Design, work stage 1-6 (LP1-6) | Steel Structure Design...", linkTitle: 'Learn More about GPC Engineering', link: '/partners/gbcengineers' },
      { img: 'assets/images/drawing2.jpg', category: 'Structural', projectTitle: 'High-Rise Buildings', company: 'FOURFrankfurt', companyIcon: 'assets/images/cpbContractors.png', serviceCompany: 'AARBEE', serviceCompanyIcon: 'assets/images/drawingLogoImg1.png', width:'70', height:'45', serviceDescription: "Type of building: Duct | Tonnage: 3,800 Tons", linkTitle: 'Learn More about Aarbee', link: '/partners/aarbeestructuresprivatelimited' },
      { img: 'assets/images/drawing3.jpg', category: 'MEP', projectTitle: 'Construction Modular Dormitory', company: 'FOURFrankfurt', companyIcon: 'assets/images/gpcEngineering.png', serviceCompany: 'J&F India', serviceCompanyIcon: 'assets/images/jf-icon.jpg', width:'84', height:'44', serviceDescription: "1 million € construction costs electrical | approx. 22,000 m²", linkTitle: 'Learn More about J&F India', link: '/partners/j&findia' },
      { img: 'assets/images/drawing1.jpg', category: 'MEP', projectTitle: 'Logistics Hall Construction', company: 'HBM Darmstadt', companyIcon: 'assets/images/cpbContractors.png', serviceCompany: 'MoldTek', serviceCompanyIcon: 'assets/images/moldtek-icon.jpg', width:'70', height:'45', serviceDescription: "Tonnage: 2,800 Tons", linkTitle: 'Learn More about MoldTek', link: '/partners/mold-tektechnologieslimited' }
  
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











    @Output() tenderWork: EventEmitter<boolean> = new EventEmitter();

    countryArray = [
      {
        image: 'assets/images/us-flag.png',
        label: 'United States',
        value: 'UnitedStates',
        currency: 'IBC',
        alt: 'US Flag'
      },
      {
        image: 'assets/images/aus-flag.png',
        label: 'Australia',
        value: 'Australia',
        currency: 'NCC',
        alt: 'AUS Flag'
      },
      {
        image: 'assets/images/eu-flag.png',
        label: 'European Union',
        value: 'EuropeanUnion',
        currency: 'EC',
        alt: 'EU Flag'
      },
      {
        image: 'assets/images/uk-flag.png',
        label: 'United Kingdom',
        value: 'UK',
        currency: 'BS',
        alt: 'UK Flag'
      },
      {
        image: 'assets/images/canada-flag.png',
        label: 'Canada',
        value: 'Canada',
        currency: 'CBC',
        alt: 'Canada Flag'
      },
      {
        image: 'assets/images/india-flag.png',
        label: 'India',
        value: 'India',
        currency: 'INR',
        alt: 'India Flag'
      }
    ]
  
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
  
    selectedCountry = this.countryArray[0];
    selectedPrecast = this.precastList[0];
    selectedPrecastServices = this.precastServices[0];
  
    startDate = null;
    endDate = null;
  
    selectDay: string;
    selectMonth: string;
    selectDate: number;
    selectYear: number;
    selectEndDay: string;
    selectEndMonth: string;
    selectEndDate: number;
    selectEndYear: number;
  
    constructor(public _languageService:LanguageService) { }
  
    ngOnInit(): void {
      if(window.innerWidth < 767) {
        this.discoverProjects = this.splitArray(this.projectsArray, 1);
      }
      
      this.startDate = new Date();
      this.endDate = new Date(new Date().setDate(new Date().getDate() + 6));
  
      this.onStartDate(this.startDate);
      this.onEndDate(this.endDate);
    }
  
    selectCountry(selectedOption: any) {
      this.selectedCountry = this.countryArray.find(e => e.value === selectedOption);
    }
  
    selectPrecast(selectedOption: any) {
      this.selectedPrecast = this.precastList.find(e => e.value === selectedOption);
    }
  
    selectService(selectedOption: any) {
      this.selectedPrecastServices = this.precastServices.find(e => e.value === selectedOption);
    }
  
    onStartDate(result: Date) {
      const dateObj = new Date(result);
      this.selectDay = dateObj.toLocaleString('en-us', { weekday: 'long' });
      this.selectMonth = dateObj.toLocaleString('en-us', { month: 'long' });
      this.selectDate = dateObj.getDate();
      this.selectYear = dateObj.getFullYear();
    }
  
    onEndDate(result: Date) {
      const dateObj = new Date(result);
      this.selectEndDay = dateObj.toLocaleString('en-us', { weekday: 'long' });
      this.selectEndMonth = dateObj.toLocaleString('en-us', { month: 'long' });
      this.selectEndDate = dateObj.getDate();
      this.selectEndYear = dateObj.getFullYear();
    }
  
    tenderWorkFunc() {
      this.tenderWork.emit(true)
    }





}
