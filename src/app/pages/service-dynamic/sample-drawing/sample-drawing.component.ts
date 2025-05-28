import { Component, EventEmitter, OnInit, Input, Output, ViewChild , OnChanges, SimpleChanges} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { getDate } from 'date-fns';
import { LanguageService } from 'src/app/services/language.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MarkdownService } from 'ngx-markdown';
import { marked } from 'marked';


@Component({
  selector: 'app-rebar-sample-drawing',
  // standalone: true,
  // imports: [],
  templateUrl: './sample-drawing.component.html',
  styleUrl: './sample-drawing.component.scss'
})
export class RebarSampleDrawingComponent implements OnChanges{

  @Input() sectionHeading: any = '';
  @Input() sectionSubHeading: any = '';
  @Input() drawingsInfo: any = [];
  processedHeading: SafeHtml;
  processedSubHeading: SafeHtml;


  ngOnChanges(changes: SimpleChanges) {
      if (changes['sectionHeading'] && this.sectionHeading) {
        // console.log("Original heading:", this.sectionHeading);
        const textWithBreaks = this.sectionHeading.replace(/\n/g, '<br>');
        let html = textWithBreaks//marked(textWithBreaks);
  
      // Create temporary DOM element
      // const tempDiv = document.createElement('div');
      // tempDiv.innerHTML = html;
      
      // // Check if we have a p tag as first child
      // if (tempDiv.firstChild && tempDiv.firstChild.nodeName === 'P') {
      //   // Properly cast to Element to access innerHTML
      //   const pElement = tempDiv.firstChild as Element;
      //   html = pElement.innerHTML;
      // }
  
        // console.log('html after removing p tag: ', html);
        this.processedHeading = this.sanitizer.bypassSecurityTrustHtml(html);
      }


      if(changes['sectionSubHeading'] && this.sectionSubHeading) {
        // console.log("Original sub heading:", this.sectionSubHeading);
        const textWithBreaks = this.sectionSubHeading.replace(/\n/g, '<br>');
        let html = textWithBreaks//marked(textWithBreaks);
  
       // Create temporary DOM element
      //  const tempDiv = document.createElement('div');
      //  tempDiv.innerHTML = html;
     
      //  // Check if we have a p tag as first child
      //  if (tempDiv.firstChild && tempDiv.firstChild.nodeName === 'P') {
      //    // Properly cast to Element to access innerHTML
      //    const pElement = tempDiv.firstChild as Element;
      //    html = pElement.innerHTML;
      //  }
  
        this.processedSubHeading = this.sanitizer.bypassSecurityTrustHtml(html);
      }
      
      
      if(changes['drawingsInfo']) {
        // console.log("First condition met: changes['drawingsInfo']");
        
        if(this.drawingsInfo) {
          // console.log("Second condition met: this.drawingsInfo exists");
          
          if(this.drawingsInfo.length > 0) {
            // console.log("Third condition met: array has items");
            
            // Process the array
            this.drawingsInfo.forEach((item, index) => {
              // console.log(`Processing item ${index}:`, item);
              
              if(item.serviceDescription) {
                // console.log(`Item ${index} has serviceDescription:`, item.serviceDescription);
                // Process the service description as before...
                // const textWithBreaks = item.serviceDescription.replace(/\n/g, '<br>');
                let html = marked(item.serviceDescription);
    
                // const tempDiv = document.createElement('div');
                // tempDiv.innerHTML = html;
                
                // if (tempDiv.firstChild && tempDiv.firstChild.nodeName === 'P') {
                //   const pElement = tempDiv.firstChild as Element;
                //   html = pElement.innerHTML;
                // }
    
                item.serviceDescription = this.sanitizer.bypassSecurityTrustHtml(html);
              } else {
                console.log(`Item ${index} does not have serviceDescription property`);
              }
            });
          } else {
            console.log("Third condition failed: array is empty");
          }
        } else {
          console.log("Second condition failed: this.drawingsInfo does not exist");
        }
      } else {
        console.log("First condition failed: changes['drawingsInfo'] does not exist");
      }
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
      { img: 'assets/images/drawing1.jpg', category: 'MEP', projectTitle: 'Logistics Hall Construction', company: 'HBM Darmstadt', companyIcon: 'assets/images/gpcEngineering.png', serviceCompany: 'GBC Engineering', serviceCompanyIcon: 'assets/images/drawingLogoImg2.png', width:'84', height:'44', serviceDescription: "Structural Design, work stage 1-6 (LP1-6) | Steel Structure Design...", linkTitle: 'Learn More about GBC Engineering', link: '/partners/gbc-engineers' },
      { img: 'assets/images/drawing2.jpg', category: 'Structural', projectTitle: 'High-Rise Buildings', company: 'FOURFrankfurt', companyIcon: 'assets/images/cpbContractors.png', serviceCompany: 'AARBEE', serviceCompanyIcon: 'assets/images/drawingLogoImg1.png', width:'70', height:'45', serviceDescription: "Type of building: Duct | Tonnage: 3,800 Tons", linkTitle: 'Learn More about Aarbee', link: '/partners/aarbee-structures-private-limited' },
      { img: 'assets/images/drawing3.jpg', category: 'MEP', projectTitle: 'Construction Modular Dormitory', company: 'FOURFrankfurt', companyIcon: 'assets/images/gpcEngineering.png', serviceCompany: 'J&F India', serviceCompanyIcon: 'assets/images/jf-icon.jpg', width:'84', height:'44', serviceDescription: "1 million € construction costs electrical | approx. 22,000 m²", linkTitle: 'Learn More about J&F India', link: '/partners/j-f-india' },
      { img: 'assets/images/drawing1.jpg', category: 'MEP', projectTitle: 'Logistics Hall Construction', company: 'HBM Darmstadt', companyIcon: 'assets/images/cpbContractors.png', serviceCompany: 'MoldTek', serviceCompanyIcon: 'assets/images/moldtek-icon.jpg', width:'70', height:'45', serviceDescription: "Tonnage: 2,800 Tons", linkTitle: 'Learn More about MoldTek', link: '/partners/mold-tek-technologies-limited' }
  
    ]
  
    // discoverProjects = this.splitArray(this.projectsArray, 4);






  customOptions: OwlOptions = {
    margin: 25,
    loop: false,
    dots: false,
    autoplay: false,
    autoplayHoverPause: false,
    navText:['<button type="button" class="btn slider-left-btn"> </button>','<button type="button" class="btn slider-right-btn"> </button>'],
    nav: true,
    responsive:{
      0:{
          items:1,
          autoplay: true,
          loop: true,
      },
      600:{
          items:1,
          autoplay: false,
          loop: false,
      },
      800:{
          items:2,
          autoplay: false,
          loop: false,
      },
      900:{
          items:2,
          autoplay: false,
          loop: false,
      },
      1200:{
          items:3,
          autoplay: false,
          loop: false,
      }
  }      
  }



  
  @Output() tenderWork: EventEmitter<boolean> = new EventEmitter();

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

  constructor(public _languageService:LanguageService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // if(window.innerWidth < 767) {
    //   this.discoverProjects = this.splitArray(this.projectsArray, 1);
    // }
    
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


