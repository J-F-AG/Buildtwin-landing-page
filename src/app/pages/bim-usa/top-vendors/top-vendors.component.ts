import { Component} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { getDate } from 'date-fns';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-bim-usa-top-vendors',
  // standalone: true,
  // imports: [],
  templateUrl: './top-vendors.component.html',
  styleUrl: './top-vendors.component.scss'
})
export class BimUsaTopVendorsComponent{

  constructor(public _languageService:LanguageService) { }
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
      { img: 'assets/images/Jim-Bridger-SCR-Plate-Flues-Ducts.jpg', category: 'Structural', projectTitle: 'Jim Bridger SCR Plate', company: 'Wyoming, US.', locationFlag: 'assets/images/us-flag.png', serviceCompany: 'Aarbee Structures', serviceCompanyIcon: 'assets/images/aarbee-icon.jpg', width:'46', height:'30', serviceDescription: "Type of building: Duct | Tonnage: 3,800 Tons", linkTitle: 'Learn More about Aarbee', link: '/partners/aarbee-structures-private-limited', alt: 'US Flag' },
      { img: 'https://s3.ap-southeast-1.amazonaws.com/buildtwin-prod-cockpit.buildtwin.com/bt-assets/resource/privateS3/upload/business-listing-image/public/20240808/file_0c5f4218-0c55-401f-b2eb-63aa928258cb.jpg', category: 'Structural', projectTitle: 'Las Vegas Raiders Stadium', company: 'Nevada, USA', locationFlag: 'assets/images/us-flag.png', serviceCompany: 'Aarbee Structures', serviceCompanyIcon: 'assets/images/aarbee-icon.jpg', width:'46', height:'30', serviceDescription: "Commercial 27,500 Tons", linkTitle: 'Learn More about Aarbee', link: '/partners/aarbee-structures-private-limited', alt: 'US Flag' },
      { img: 'https://s3.ap-southeast-1.amazonaws.com/buildtwin-prod-cockpit.buildtwin.com/bt-assets/resource/privateS3/upload/business-listing-image/public/20240920/file_2d246b48-aa36-4cf3-aa61-49a9f01c8371.webp', category: 'Structural', projectTitle: '3D Modelling and 2D Drawings', company: 'Georgia, USA', locationFlag: 'assets/images/us-flag.png', serviceCompany: 'Oriole', serviceCompanyIcon: 'https://s3.ap-southeast-1.amazonaws.com/buildtwin-prod-cockpit.buildtwin.com/bt-assets/resource/privateS3/upload/business-listing-image/public/20240821/file_1117328d-f7ce-4583-800b-c7ee40382489.png', width:'46', height:'30', serviceDescription: "LOD 350 modelling and model validation for Architecture and Structure. LOD 350 modelling and shop drawing creation for Plumbing and Electrical. This was is having 11 levels including 3 parking.", linkTitle: 'Learn More about Oriole', link: '/partners/oriole-design-tech-solutions-llp', alt: 'US Flag' },
      { img: 'https://s3.ap-southeast-1.amazonaws.com/buildtwin-prod-cockpit.buildtwin.com/bt-assets/resource/privateS3/upload/business-listing-image/public/20240920/file_5b9b6f8d-6f3e-4bba-8bc5-28e101c2ec64.webp', category: 'Structural', projectTitle: '3D Modeling, Coordination and Shop drawing', company: 'Florida, USA', locationFlag: 'assets/images/us-flag.png', serviceCompany: 'Oriole', serviceCompanyIcon: 'https://s3.ap-southeast-1.amazonaws.com/buildtwin-prod-cockpit.buildtwin.com/bt-assets/resource/privateS3/upload/business-listing-image/public/20240821/file_1117328d-f7ce-4583-800b-c7ee40382489.png', width:'46', height:'30', serviceDescription: "Due to involvement of multiple trade and frequent changes it was really challenging to keep track of everything. So we have reviewed each changes and issues precisely.", linkTitle: 'Learn More about Oriole', link: '/partners/oriole-design-tech-solutions-llp', alt: 'US Flag' },
      // { img: 'assets/images/high-building.png', category: 'Structural', projectTitle: 'High-Rise Buildings', company: 'FOURFrankfurt', locationFlag: 'assets/images/ui/us-flag.png', serviceCompany: 'J&F India', serviceCompanyIcon: 'assets/images/jf-icon.jpg', width:'59', height:'30', serviceDescription: "1 million € construction costs electrical | approx. 22,000 m²", linkTitle: 'Learn More about J&F India', link: '/partners/j-f-india' },
      // { img: 'assets/images/Gillette-Stadium.jpg', category: 'Structural', projectTitle: 'Gillette Stadium North end zone renovation', company: 'Foxborough, MA', locationFlag: 'assets/images/ui/us-flag.png', serviceCompany: 'Mold-Tek Technologies', serviceCompanyIcon: 'assets/images/moldtek-icon.jpg', width:'60', height:'30', serviceDescription: "Tonnage: 2,800 Tons", linkTitle: 'Learn More about MoldTek', link: '/partners/mold-tek-technologies-limited' }
    ]
  

  customOptions: OwlOptions = {
    margin: 25,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayHoverPause: false,
    navText:['<button type="button" class="btn slider-left-btn"> </button>','<button type="button" class="btn slider-right-btn"> </button>'],
    nav: true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      800:{
          items:2
      },
      900:{
          items:2
      },
      1200:{
          items:3
      }
  }      
  }

}