import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-hd-discover-projects',
  templateUrl: './hd-discover-projects.component.html',
  styleUrl: './hd-discover-projects.component.scss'
})
export class HdDiscoverProjectsComponent implements OnInit {

  constructor(private http: HttpClient) {
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
      // { img: 'assets/images/Tesla-002.jpg', category: 'Structural', projectTitle: 'TESLA Gigafactory', company: 'Grünheide, Germany', locationFlag: 'assets/images/ui/germany.png', serviceCompany: 'GPC Engineering', serviceCompanyIcon: 'assets/images/gbcEngineering.png', width:'57', height:'30', serviceDescription: "Structural Design, work stage 1-6 (LP1-6) | Steel Structure Design...", linkTitle: 'Learn More about GPC Engineering', link: '/partners/GBCEngineers' },
      // { img: 'assets/images/high-building.png', category: 'Structural', projectTitle: 'High-Rise Buildings', company: 'FOURFrankfurt', locationFlag: 'assets/images/ui/germany.png', serviceCompany: 'J&F India', serviceCompanyIcon: 'assets/images/jf-icon.jpg', width:'59', height:'30', serviceDescription: "1 million € construction costs electrical | approx. 22,000 m²", linkTitle: 'Learn More about J&F India', link: '/partners/J&FIndia' },
      // { img: 'assets/images/Jim-Bridger-SCR-Plate-Flues-Ducts.jpg', category: 'Structural', projectTitle: 'Jim Bridger SCR Plate', company: 'Wyoming, US.', locationFlag: 'assets/images/us-flag.png', serviceCompany: 'Aarbee Structures', serviceCompanyIcon: 'assets/images/aarbee-icon.jpg', width:'46', height:'30', serviceDescription: "Type of building: Duct | Tonnage: 3,800 Tons", linkTitle: 'Learn More about Aarbee', link: '/partners/AarbeeStructuresPrivateLimited' },
      // { img: 'assets/images/Gillette-Stadium.jpg', category: 'Structural', projectTitle: 'Gillette Stadium North end zone renovation', company: 'Foxborough, MA', locationFlag: 'assets/images/ui/germany.png', serviceCompany: 'Mold-Tek Technologies', serviceCompanyIcon: 'assets/images/moldtek-icon.jpg', width:'60', height:'30', serviceDescription: "Tonnage: 2,800 Tons", linkTitle: 'Learn More about MoldTek', link: '/partners/Mold-TekTechnologiesLimited' }
    ]
  
    discoverProjects = [];
    showLoader = false;
  
    index = 0;

    ngOnInit(): void {
      if(window.innerWidth < 767) {
        this.discoverProjects = this.splitArray(this.projectsArray, 1);
      }
      this.showLoader = true;
      this.http.get(`https://iwu00tg8mc.execute-api.eu-central-1.amazonaws.com/V1/featured-projects?page=1`)
      .pipe(
        catchError(err => {
          this.showLoader = false;
          return err;
        }),
        retry(2)
      )
      .subscribe(response => {
        this.showLoader = false;
        if (response && response['data']) {
          response['data'].forEach(res => {
            let proImage = '';
            if (res.project_logo) {
              res.project_logo = res.project_logo.replace('{', '[');
              res.project_logo = res.project_logo.replace(/.$/,"]");
              let images = JSON.parse(res.project_logo);
              if (images.length) {
                let im1 = JSON.parse(images[0]);
                if (im1 && im1.imageurls && im1.imageurls.length) {
                  proImage = im1.imageurls[0];
                }
              }
            }
            this.projectsArray.push({
              img: proImage || 'assets/images/placeholder-logo.png', 
              category: res.service,
              projectTitle: res.project_name,
              company: res.project_region,
              locationFlag: '',
              serviceCompany: res.company_name, 
              serviceCompanyIcon: res.company_logo,
              width:'57', height:'30', 
              serviceDescription: res.project_description.replace(/(?:\r\n|\r|\n)/g, '<br>'),
              linkTitle: 'Learn More about GPC Engineering', 
              link: `/partners/${res.company_name}`
            })
          });
          this.discoverProjects = this.splitArray(this.projectsArray, 4);
        }
      })
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
