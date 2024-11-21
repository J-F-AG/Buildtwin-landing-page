import { Component} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { getDate } from 'date-fns';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-top-vendors',
  // standalone: true,
  // imports: [],
  templateUrl: './top-vendors.component.html',
  styleUrl: './top-vendors.component.scss'
})
export class TopVendorsComponent{

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
      { img: 'assets/images/Tesla-002.jpg', category: 'Structural', projectTitle: 'TESLA Gigafactory', company: 'Grünheide, Germany', locationFlag: 'assets/images/ui/germany.png', serviceCompany: 'GPC Engineering', serviceCompanyIcon: 'assets/images/gbcEngineering.png', width:'57', height:'30', serviceDescription: "Structural Design, work stage 1-6 (LP1-6) | Steel Structure Design...", linkTitle: 'Learn More about GPC Engineering', link: '/partners/gbcengineers' },
      { img: 'assets/images/high-building.png', category: 'Structural', projectTitle: 'High-Rise Buildings', company: 'FOURFrankfurt', locationFlag: 'assets/images/ui/germany.png', serviceCompany: 'J&F India', serviceCompanyIcon: 'assets/images/jf-icon.jpg', width:'59', height:'30', serviceDescription: "1 million € construction costs electrical | approx. 22,000 m²", linkTitle: 'Learn More about J&F India', link: '/partners/j&findia' },
      { img: 'assets/images/Jim-Bridger-SCR-Plate-Flues-Ducts.jpg', category: 'Structural', projectTitle: 'Jim Bridger SCR Plate', company: 'Wyoming, US.', locationFlag: 'assets/images/us-flag.png', serviceCompany: 'Aarbee Structures', serviceCompanyIcon: 'assets/images/aarbee-icon.jpg', width:'46', height:'30', serviceDescription: "Type of building: Duct | Tonnage: 3,800 Tons", linkTitle: 'Learn More about Aarbee', link: '/partners/aarbeestructuresprivatelimited' },
      { img: 'assets/images/Gillette-Stadium.jpg', category: 'Structural', projectTitle: 'Gillette Stadium North end zone renovation', company: 'Foxborough, MA', locationFlag: 'assets/images/ui/germany.png', serviceCompany: 'Mold-Tek Technologies', serviceCompanyIcon: 'assets/images/moldtek-icon.jpg', width:'60', height:'30', serviceDescription: "Tonnage: 2,800 Tons", linkTitle: 'Learn More about MoldTek', link: '/partners/mold-tektechnologieslimited' }
    ]
  

  customOptions: OwlOptions = {
    margin: 25,
    loop: false,
    dots: true,
    autoplay: false,
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
      1000:{
          items:1
      }
  }      
  }

}