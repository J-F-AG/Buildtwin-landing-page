import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-hd-discover-projects-building-code-euro',
  templateUrl: './hd-discover-projects.component.html',
  styleUrls: ['../../Home/hd-discover-projects/hd-discover-projects.component.scss','./hd-discover-projects.component.scss']
})
// ./pages/Home/hd-discover-projects/hd-discover-projects.component
export class HdDiscoverProjectsBuildingCodeBSComponent implements OnInit {
  @Input() page: string = ''; //sector
  @Input() hideTitle: boolean = false;
  factorySlider: OwlOptions | null = null; 
  isBrowser: boolean;
  constructor(private http: HttpClient, public _languageService:LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
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
      { img: 'assets/images/Tesla-002.jpg', category: 'Structural', projectTitle: 'TESLA Gigafactory', company: 'Grünheide, Germany', locationFlag: 'assets/images/ui/germany.png', serviceCompany: 'GBC Engineering', serviceCompanyIcon: 'assets/images/gbcEngineering.png', width:'57', height:'30', serviceDescription: "Structural Design, work stage 1-6 (LP1-6) | Steel Structure Design...", linkTitle: 'Learn More about GBC Engineering', link: '/partners/gbc-engineers', alt: 'Germany Flag' },
      { img: 'assets/images/high-building.png', category: 'Structural', projectTitle: 'High-Rise Buildings', company: 'FOURFrankfurt', locationFlag: 'assets/images/ui/germany.png', serviceCompany: 'J&F India', serviceCompanyIcon: 'assets/images/jf-icon.jpg', width:'59', height:'30', serviceDescription: "1 million € construction costs electrical | approx. 22,000 m²", linkTitle: 'Learn More about J&F India', link: '/partners/j-f-india', alt: 'Germany Flag' },
      { img: 'assets/images/Jim-Bridger-SCR-Plate-Flues-Ducts.jpg', category: 'Structural', projectTitle: 'Jim Bridger SCR Plate', company: 'Wyoming, US.', locationFlag: 'assets/images/us-flag.png', serviceCompany: 'Aarbee Structures', serviceCompanyIcon: 'assets/images/aarbee-icon.jpg', width:'46', height:'30', serviceDescription: "Type of building: Duct | Tonnage: 3,800 Tons", linkTitle: 'Learn More about Aarbee', link: '/partners/aarbee-structures-private-limited', alt: 'US Flag' },
      { img: 'assets/images/Gillette-Stadium.jpg', category: 'Structural', projectTitle: 'Gillette Stadium North end zone renovation', company: 'Foxborough, MA', locationFlag: 'assets/images/us-flag.png', serviceCompany: 'Mold-Tek Technologies', serviceCompanyIcon: 'assets/images/moldtek-icon.jpg', width:'60', height:'30', serviceDescription: "Tonnage: 2,800 Tons", linkTitle: 'Learn More about MoldTek', link: '/partners/mold-tek-technologies-limited', alt: 'US Flag' }
    ]
  
    discoverProjects = this.splitArray(this.projectsArray, 4);
    response = [{
      "id": 3,
      "domain": "test140.buildtwin.com",
      "project_name": "Design and Analysis of Iconic Bridge",
      "project_description": "Designed and analyzed an iconic bridge structure for long-term durability and safety under varying environmental conditions.\nTechnologies Used:\nAdvanced structural analysis software (STAAD.Pro, MIDAS Civil)\n3D modeling tools (AutoCAD, Revit)\nWind and seismic load analysis\nOutcome:\nVerified structural integrity and load-bearing capacity through detailed simulations and analysis.\nDelivered comprehensive engineering reports and construction drawings for implementation.",
      "project_logo": '{"{\"name\":\"Overview\",\"imageurls\":[\"https://s3.ap-southeast-1.amazonaws.com/buildtwin-prod-cockpit.buildtwin.com/bt-assets/resource/privateS3/upload/business-listing-image/public/20240812/file_37244016-3a0d-40b1-b31c-b28f3a2da507.png\"]}","{\"name\":\"Structural Details\",\"imageurls\":[\"https://s3.ap-southeast-1.amazonaws.com/buildtwin-prod-cockpit.buildtwin.com/bt-assets/resource/privateS3/upload/business-listing-image/public/20240812/file_62b6e1e6-8d47-489a-a504-806dff4b6c2c.png\",\"https://s3.ap-southeast-1.amazonaws.com/buildtwin-prod-cockpit.buildtwin.com/bt-assets/resource/privateS3/upload/business-listing-image/public/20240812/file_e4dca355-d0fc-4d81-b16d-490bfa5a5461.png\"]}","{\"name\":\"BIM Model\",\"imageurls\":[\"https://s3.ap-southeast-1.amazonaws.com/buildtwin-prod-cockpit.buildtwin.com/bt-assets/resource/privateS3/upload/business-listing-image/public/20240812/file_7375a084-86ce-47a9-b3f5-387fda9d9507.png\"]}","{\"name\":\"Connection Designs\",\"imageurls\":[\"https://s3.ap-southeast-1.amazonaws.com/buildtwin-prod-cockpit.buildtwin.com/bt-assets/resource/privateS3/upload/business-listing-image/public/20240812/file_79701f36-8e65-4c6c-87a6-d0433080000a.png\"]}"}',
      "project_title": "Design and Analysis of Iconic Bridge",
      "project_region": "India",
      "project_category": "",
      "created_at": "2024-07-12T12:07:04.208Z",
      "updated_at": "2024-07-12T12:07:04.208Z",
      "is_selected": true,
      "company_id": "24733f92-b6fc-464c-a52e-174b77b64294",
      "service": "Structural",
      "is_featured": true,
      "company_name": "",
      "company_logo": ""
    }]
  
    index = 0;

    ngOnInit(): void {
      this.sliderInit()
      if(window.innerWidth < 767) {
        this.discoverProjects = this.splitArray(this.projectsArray, 1);
      }

      // this.http.get(`https://iwu00tg8mc.execute-api.eu-central-1.amazonaws.com/V1/featured-projects?page=1`).subscribe(res => {
      //   debugger
      // })
    }
    sliderInit (){
      this.factorySlider = {
        nav: true,
        margin: 37,  // Adjust as needed
        dots: false,
        loop: true,
        autoplay: false,
        autoplayHoverPause: false,
        navText: [
          "<i class='ti ti-chevron-left'></i>",
          "<i class='ti ti-chevron-right'></i>",
        ],
        stagePadding: 0,  // Adjust padding for the "half" item effect
        responsive: {
          0: {
            items: 1  // 1 item for small screens
          },
          400: {
            items: 1  // 1 item for slightly larger screens
          },
          740: {
            items: 1  // 2 items for medium screens
          },
          940: {
            items: 2.1  // 2 full items and a half item for larger screens
          }
        }
      };
    }
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

    

}
