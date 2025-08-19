import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';
import { ArcadeService } from 'src/app/include-component/arcade-container/arcade.service';

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
  
  // AI Capabilities carousel data
  aiCapabilities = [
    {
      id: 'track-submissions',
      icon: 'assets/images/new-v2-icon1.png',
      title: 'AI Quality Control for Structural Drawings',
      description: 'Assessment: This feature offers a centralized tracking system, likely replacing manual methods like spreadsheets, with robust search and filtering for efficiency.',
      image: 'assets/images/new-v2-image1.png'
    },
    {
      id: 'view-files-comment',
      icon: 'assets/images/new-v2-icon2.png',
      title: 'AI generated drawings',
      description: 'Facilitates collaborative review by allowing direct feedback on documents, reducing reliance on external communication tools.',
      image: 'assets/images/new-v2-image2.png'
    },
    {
      id: 'share-with-ease',
      icon: 'assets/images/new-v2-icon3.png',
      title: 'AI Design Manager',
      description: 'Streamlines file distribution with an intuitive interface, potentially eliminating the need for third-party services like WeTransfer.',
      image: 'assets/images/new-v2-image3.png'
    },
    {
      id: 'project-workflow',
      icon: 'assets/images/new-v2-icon4.png',
      title: 'Manage and track your delivery',
      description: 'Enhances task management by providing customizable views and quick access to critical information, minimizing workflow bottlenecks.',
      image: 'assets/images/new-v2-image4.png'
    }
  ];
  
  // Create extended array with duplicates for carousel effect
  carouselItems: any[] = [];
  
  // Carousel properties
  currentSlide = 0;
  itemsPerView = 4;
  
  tabDetail: any =[
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
      text:'Track with AI',
      target: 'assets/images/for-seller/mange-portfolio.jpg',
      target2x: 'assets/images/for-seller/mange-portfolio@2x.jpg',
      targetwebp: 'assets/images/for-seller/mange-portfolio.webp',
      targetwebp2x: 'assets/images/for-seller/mange-portfolio@2x.webp',
    },
    {
      icon:'assets/images/icons/match.png',
      text:'Mark-UP and Collaboration',
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
  constructor(
    private titleService: Title,
    private router: Router,
    public _languageService: LanguageService,
    private arcadeService: ArcadeService
  ) {
    this.titleService.setTitle('BuildTwin - Collaborate seamless with AI');
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
    
    // Initialize carousel items
    this.carouselItems = [...this.aiCapabilities, ...this.aiCapabilities, ...this.aiCapabilities];
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
  openArcadeDemo(featureKey: string) {
    const arcadeData = this.arcadeService.arcadeData;
    
    if (arcadeData[featureKey]) {
      const url = arcadeData[featureKey].url;
      window.open(url, '_blank');
    } else {
      // Fallback for features not in arcade service
      console.log(`Arcade demo not available for: ${featureKey}`);
    }
  }
  
  // Carousel navigation methods
  nextSlide() {
    if (this.currentSlide < this.aiCapabilities.length) {
      this.currentSlide++;
    }
  }
  
  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }
  
  // Check if navigation buttons should be disabled
  canGoNext(): boolean {
    return this.currentSlide < this.aiCapabilities.length;
  }
  
  canGoPrev(): boolean {
    return this.currentSlide > 0;
  }
  
  // Arcade trigger method for carousel items
  onClickArcadeTrigger(type: string) {
    // You can implement arcade functionality here if needed
    console.log(`Arcade triggered for: ${type}`);
  }
  
  ngOnDestroy() {
    try {
      document.body.classList.remove('white-show-wrapper');
    } catch (error) {
      
    }
  }
}
