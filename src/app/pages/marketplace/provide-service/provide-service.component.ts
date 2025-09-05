import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';


@Component({
  selector: 'app-provide-service',
  templateUrl: './provide-service.component.html',
  styleUrl: './provide-service.component.scss'
})
export class ProvideServiceComponent {
  marketPlace: number = 1;
  showPopup1=false;
  showPopup=false;
  activeState: number = 1
  activeState2: number = 11
  // title = 'BuildTwin - Software for technical Teams';
  activeState3: number = 21
  FixedDiv: any
  FixedDivPositionTop: any
  fixedDIvOffsetTop: any
  fixedElement3: any
  scrollPosition: any

  FixedDiv2: any
  // scrolled div 
  scrollActivated: any
  scrollDivOffsettop: any
  scrolledDivHeight: any
  fixedElement: any
  fixedElement1: any

navBar:any
tabHead:any
selectedIndex: number = 0
  tabDetail: any =[
    {
      icon:'assets/images/icons/match.png',
      text:'Collaborate with AI',
      target: 'assets/images/for-seller/mange-portfolio.jpg',
      target2x: 'assets/images/for-seller/mange-portfolio@2x.jpg',
      targetwebp: 'assets/images/for-seller/mange-portfolio.webp',
      targetwebp2x: 'assets/images/for-seller/mange-portfolio@2x.webp',
    },
    {
      icon:'assets/images/icons/reach.png',
      text:'Track with AI',
      target: 'assets/images/for-seller/mange-portfolio.jpg',
      target2x: 'assets/images/for-seller/mange-portfolio@2x.jpg',
      targetwebp: 'assets/images/for-seller/mange-portfolio.webp',
      targetwebp2x: 'assets/images/for-seller/mange-portfolio@2x.webp',
    },
    {
      icon:'assets/images/icons/manage-portfolio.png',
      text:'Connectivity',
      target: 'assets/images/for-seller/mange-portfolio.jpg',
      target2x: 'assets/images/for-seller/mange-portfolio@2x.jpg',
      targetwebp: 'assets/images/for-seller/mange-portfolio.webp',
      targetwebp2x: 'assets/images/for-seller/mange-portfolio@2x.webp',
    },
    {
      icon:'assets/images/icons/reach.png',
      text:'Share',
      target: 'assets/images/for-seller/mange-portfolio.jpg',
      target2x: 'assets/images/for-seller/mange-portfolio@2x.jpg',
      targetwebp: 'assets/images/for-seller/mange-portfolio.webp',
      targetwebp2x: 'assets/images/for-seller/mange-portfolio@2x.webp',
    },
    {
      icon:'assets/images/icons/analyze.png',
      text:'Automated Documentation',
      target: 'assets/images/for-seller/mange-portfolio.jpg',
      target2x: 'assets/images/for-seller/mange-portfolio@2x.jpg',
      targetwebp: 'assets/images/for-seller/mange-portfolio.webp',
      targetwebp2x: 'assets/images/for-seller/mange-portfolio@2x.webp',
    }
  ]
  constructor(private titleService: Title, private router: Router, public _languageService:LanguageService) {
    router.events.subscribe((val) => {
      setTimeout(() => {
        try { this.scrollActivated = document.getElementById('scrollActivated'); } catch (error) { console.error('getElementById failed for scrollActivated (init):', error); }
        if(this.scrollActivated){
          try {
            this.scrollDivOffsettop = this.scrollActivated.getBoundingClientRect().top;
            this.scrolledDivHeight = this.scrollActivated.getBoundingClientRect().height;
          } catch (error) {
            console.error('getBoundingClientRect failed for scrollActivated (init):', error);
          }
        }
      }, 2000);
    });
    try { document.body.classList.add('white-show-wrapper'); } catch (error) { console.error('classList.add failed on body (constructor):', error); }
    
  }



  scrollToSection(sectionId: string) {
    try {
      let section: HTMLElement | null = null;
      try { section = document.getElementById(sectionId); } catch (error) { console.error('getElementById failed in scrollToSection for:', sectionId, error); }
      if (section) {
        try { section.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (error) { console.error('scrollIntoView failed in scrollToSection for:', sectionId, error); }
        setTimeout(() => {
          try {
            const offsetTop = section!.getBoundingClientRect().top;
            const desiredOffset = offsetTop - 390;
            try { window.scrollBy(0, desiredOffset); } catch (error) { console.error('window.scrollBy failed in scrollToSection for:', sectionId, error); }
          } catch (error) {
            console.error('getBoundingClientRect failed during offset adjust in scrollToSection for:', sectionId, error);
          }
        }, 100);
      }
    } catch (error) {
      // ignore outer failures
    }
  }

  ngOnInit(): void {
    // this.initHubSpotForm();



    
  }


    private initHubSpotForm() {
      // Create the HubSpot form
      window.hbspt.forms.create({
        region: "eu1",
        portalId: "144368007",
        formId: "4f09f05d-b46d-4497-b49e-4bf67f826066",
        target: '#hubspotFormContainer21'
      });
    
        }

    call(){
      this.showPopup1 =true
      }
      closePopup1(){
        this.showPopup1 =false
      
        }
  

        callStatus(){
          this.showPopup =true
          }
          closePopupStatus($event) {
            this.showPopup = false;
          }

  marketplaceNumber(event) {
    this.marketPlace = event
  }
  changeTab(index){
    this.selectedIndex = index
  }
  ngOnDestroy() {
  try { document.body.classList.remove('white-show-wrapper'); } catch (error) { console.error('classList.remove failed on body (ngOnDestroy):', error); }
  }
}
