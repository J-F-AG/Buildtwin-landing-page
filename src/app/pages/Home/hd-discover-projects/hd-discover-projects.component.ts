import { Component, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-hd-discover-projects',
  templateUrl: './hd-discover-projects.component.html',
  styleUrl: './hd-discover-projects.component.scss'
})
export class HdDiscoverProjectsComponent implements OnInit {

  constructor() {
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

    ngOnInit(): void {
      if(window.innerWidth < 767) {
        this.discoverProjects = this.splitArray(this.projectsArray, 1);
      }
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
