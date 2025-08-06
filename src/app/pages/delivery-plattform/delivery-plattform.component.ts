import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';


@Component({
  selector: 'app-delivery-plattform',
  templateUrl: './delivery-plattform.component.html',
  styleUrl: './delivery-plattform.component.scss'
})
export class DeliveryPlattformComponent {
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
      icon:'assets/images/icons/manage-portfolio.png',
      text:'manage Portfolio',
      target: 'assets/images/for-seller/mange-portfolio.jpg',
      target2x: 'assets/images/for-seller/mange-portfolio@2x.jpg',
      targetwebp: 'assets/images/for-seller/mange-portfolio.webp',
      targetwebp2x: 'assets/images/for-seller/mange-portfolio@2x.webp',
    },
    {
      icon:'assets/images/icons/reach.png',
      text:'Reach',
      target: 'assets/images/for-seller/mange-portfolio.jpg',
      target2x: 'assets/images/for-seller/mange-portfolio@2x.jpg',
      targetwebp: 'assets/images/for-seller/mange-portfolio.webp',
      targetwebp2x: 'assets/images/for-seller/mange-portfolio@2x.webp',
    },
    {
      icon:'assets/images/icons/match.png',
      text:'Match',
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
      text:'Analyze',
      target: 'assets/images/for-seller/mange-portfolio.jpg',
      target2x: 'assets/images/for-seller/mange-portfolio@2x.jpg',
      targetwebp: 'assets/images/for-seller/mange-portfolio.webp',
      targetwebp2x: 'assets/images/for-seller/mange-portfolio@2x.webp',
    }
  ]
  constructor(private titleService: Title, private router: Router, public _languageService:LanguageService) {
    router.events.subscribe((val) => {
      setTimeout(() => {
      this.scrollActivated = document.getElementById('scrollActivated');
        if(this.scrollActivated){
          this.scrollDivOffsettop = this.scrollActivated.getBoundingClientRect().top
          this.scrolledDivHeight = this.scrollActivated.getBoundingClientRect().height
          console.log(this.scrollDivOffsettop, this.scrolledDivHeight);
        } else {
          console.error('Element with ID scrollActivated not found');
        }
      }, 2000);
    });
    try {
      document.body.classList.add('white-show-wrapper');
    } catch (error) {
      
    }
    
  }



  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      // Scroll the section into view smoothly
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Adjust scroll position to maintain a 100-pixel gap from the top of the viewport
      setTimeout(() => {
        const offsetTop = section.getBoundingClientRect().top;
        const desiredOffset = offsetTop - 390; // Adjust the desired offset as needed
        window.scrollBy(0, desiredOffset);
      }, 100); // Adjust the delay if needed
    }
  }

  ngOnInit(): void {
    this.initHubSpotForm();



    
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
    try {
      document.body.classList.remove('white-show-wrapper');
    } catch (error) {
      
    }
  }
}
