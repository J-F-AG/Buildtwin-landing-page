import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { getDate } from 'date-fns';

@Component({
  selector: 'app-book-services-header',
  templateUrl: './book-services-header.component.html',
  styleUrls: ['./book-services-header.component.scss']
})
export class BookServicesHeaderComponent implements OnInit {

  @Output() tenderWork: EventEmitter<boolean> = new EventEmitter();

  countryArray = [
    {
      image: 'assets/images/us-flag.webp',
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

  constructor() { }

  ngOnInit(): void {
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
