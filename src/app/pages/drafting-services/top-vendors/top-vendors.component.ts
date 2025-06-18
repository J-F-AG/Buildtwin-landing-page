import { Component} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { getDate } from 'date-fns';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-drafting-top-vendors',
  // standalone: true,
  // imports: [],
  templateUrl: './top-vendors.component.html',
  styleUrl: './top-vendors.component.scss'
})
export class DraftingTopVendorsComponent{

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
      { img: 'assets/images/Tesla-002.jpg', img2x: 'assets/images/Tesla-002@2x.jpg', webp: 'assets/images/Tesla-002.webp', webp2x: 'assets/images/Tesla-002@2x.webp', category: 'Structural', projectTitle: 'TESLA Gigafactory', company: 'Grünheide, Germany', locationFlag: 'assets/images/ui/germany.png', serviceCompany: 'GBC Engineering', serviceCompanyIcon: 'assets/images/gbcEngineering.png', width:'57', height:'30', serviceDescription: "Structural Design, work stage 1-6 (LP1-6) | Steel Structure Design...", linkTitle: 'Learn More about GBC Engineering', link: '/partners/gbc-engineers', alt: 'Germany Flag' },
      { img: 'assets/images/high-building.png', img2x: 'assets/images/high-building@2x.png', webp: 'assets/images/high-building.webp', webp2x: 'assets/images/high-building@2x.webp', category: 'Structural', projectTitle: 'High-Rise Buildings', company: 'FOURFrankfurt', locationFlag: 'assets/images/ui/germany.png', serviceCompany: 'J&F India', serviceCompanyIcon: 'assets/images/jf-icon.jpg', width:'59', height:'30', serviceDescription: "1 million € construction costs electrical | approx. 22,000 m²", linkTitle: 'Learn More about J&F India', link: '/partners/j-f-india', alt: 'Germany Flag' },
      { img: 'assets/images/Jim-Bridger-SCR-Plate-Flues-Ducts.jpg', img2x: 'assets/images/Jim-Bridger-SCR-Plate-Flues-Ducts@2x.webp', webp: 'assets/images/Jim-Bridger-SCR-Plate-Flues-Ducts.webp', webp2x: 'assets/images/Jim-Bridger-SCR-Plate-Flues-Ducts@2x.jpg', category: 'Structural', projectTitle: 'Jim Bridger SCR Plate', company: 'Wyoming, US.', locationFlag: 'assets/images/us-flag.png', serviceCompany: 'Aarbee Structures', serviceCompanyIcon: 'assets/images/aarbee-icon.jpg', width:'46', height:'30', serviceDescription: "Type of building: Duct | Tonnage: 3,800 Tons", linkTitle: 'Learn More about Aarbee', link: '/partners/aarbee-structures-private-limited', alt: 'US Flag' },
      { img: 'assets/images/Gillette-Stadium.jpg', img2x: 'assets/images/Gillette-Stadium@2x.jpg', webp: 'assets/images/Gillette-Stadium.webp', webp2x: 'assets/images/Gillette-Stadium@2x.webp', category: 'Structural', projectTitle: 'Gillette Stadium North end zone renovation', company: 'Foxborough, MA', locationFlag: 'assets/images/ui/germany.png', serviceCompany: 'Mold-Tek Technologies', serviceCompanyIcon: 'assets/images/moldtek-icon.jpg', width:'60', height:'30', serviceDescription: "Tonnage: 2,800 Tons", linkTitle: 'Learn More about MoldTek', link: '/partners/mold-tek-technologies-limited', alt: 'Germany Flag' }
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