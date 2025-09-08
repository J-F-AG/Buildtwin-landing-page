import { Component, HostListener, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
  @ViewChild('popupOverlay', { static: false }) popupOverlay!: ElementRef;
  
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
  
  // BuildTwin One capabilities carousel data
  aiCapabilities = [
    {
      id: 'track-submissions',
      icon: 'assets/images/new-v2-icon1.png',
      title: 'Track your<br>submissions',
      description: 'Assessment: This feature offers a centralized tracking system, likely replacing manual methods like spreadsheets, with robust search and filtering for efficiency.',
      image: 'assets/images/new-v2-image1.png'
    },
    {
      id: 'view-files-comment',
      icon: 'assets/images/new-v2-icon2.png',
      title: 'View files and<br>comment',
      description: 'Facilitates collaborative review by allowing direct feedback on documents, reducing reliance on external communication tools.',
      image: 'assets/images/new-v2-image2.png'
    },
    {
      id: 'share-with-ease',
      icon: 'assets/images/new-v2-icon3.png',
      title: 'Share<br>with ease',
      description: 'Streamlines file distribution with an intuitive interface, potentially eliminating the need for third-party services like WeTransfer.',
      image: 'assets/images/new-v2-image3.png'
    },
    {
      id: 'project-workflow',
      icon: 'assets/images/new-v2-icon4.png',
      title: 'Filters and<br>Workflow in min.',
      description: 'Enhances task management by providing customizable views and quick access to critical information, minimizing workflow bottlenecks.',
      image: 'assets/images/new-v2-image4.png'
    }
  ];
  
  // Create extended array with duplicates for carousel effect
  carouselItems: any[] = [];
  
  // Carousel properties
  currentSlide = 0;
  itemsPerView = 4;
  
  // Arcade lightbox properties
  visibleArcade: boolean = false;
  arcadeType: string = '';
  
  // Second row - BuildTwin AI Capabilities (from homepage)
  buildTwinAICapabilities = [
    {
      id: 'ai-quality-control',
      icon: 'assets/images/new-v2-icon1.png',
      title: 'AI Quality Control for Structural Drawings',
      description: 'Assessment: This feature offers a centralized tracking system, likely replacing manual methods like spreadsheets, with robust search and filtering for efficiency.',
      image: 'assets/images/new-v2-image1.png'
    },
    {
      id: 'ai-generated-drawings',
      icon: 'assets/images/new-v2-icon2.png',
      title: 'AI generated drawings',
      description: 'Facilitates collaborative review by allowing direct feedback on documents, reducing reliance on external communication tools.',
      image: 'assets/images/new-v2-image2.png'
    },
    {
      id: 'ai-design-manager',
      icon: 'assets/images/new-v2-icon3.png',
      title: 'AI Design Manager',
      description: 'Streamlines file distribution with an intuitive interface, potentially eliminating the need for third-party services like WeTransfer.',
      image: 'assets/images/new-v2-image3.png'
    },
    {
      id: 'manage-track-delivery',
      icon: 'assets/images/new-v2-icon4.png',
      title: 'Manage and track your delivery',
      description: 'Enhances task management by providing customizable views and quick access to critical information, minimizing workflow bottlenecks.',
      image: 'assets/images/new-v2-image4.png'
    }
  ];
  
  // Create extended array for second carousel
  buildTwinAICarouselItems: any[] = [];
  
  // Separate carousel properties for second row
  currentAISlide = 0;
  
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
  constructor(
    private titleService: Title,
  private router: Router,
    public _languageService: LanguageService,
  private arcadeService: ArcadeService,
  @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.titleService.setTitle('BuildTwin - Collaborate seamless with AI');
    router.events.subscribe(() => {
      if (!isPlatformBrowser(this.platformId)) { return; }
      setTimeout(() => {
        try {
          this.scrollActivated = document.getElementById('scrollActivated');
        } catch (error) {
          console.error('getElementById failed for scrollActivated (init):', error);
        }
        if (this.scrollActivated) {
          try {
            this.scrollDivOffsettop = this.scrollActivated.getBoundingClientRect().top;
            this.scrolledDivHeight = this.scrollActivated.getBoundingClientRect().height;
          } catch (error) {
            console.error('getBoundingClientRect failed for scrollActivated (init):', error);
          }
        }
      }, 2000);
    });
    if (isPlatformBrowser(this.platformId)) {
      try { document.body.classList.add('white-show-wrapper'); } catch (error) { console.error('classList.add failed on body (constructor):', error); }
    }
    
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
    
    // Initialize first carousel items (BuildTwin One)
    this.carouselItems = [...this.aiCapabilities, ...this.aiCapabilities, ...this.aiCapabilities];
    
    // Initialize second carousel items (BuildTwin AI Capabilities)
    this.buildTwinAICarouselItems = [...this.buildTwinAICapabilities, ...this.buildTwinAICapabilities, ...this.buildTwinAICapabilities];
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
      this.showPopup1 = true;
      console.log('Opening popup, showPopup1:', this.showPopup1);
      }
      closePopup1(){
        this.showPopup1 = false;
        console.log('Closing popup, showPopup1:', this.showPopup1);
        }

  // Improved method to handle background click
  onPopupBackgroundClick(event: Event) {
    // Get the target element that was clicked
    const target = event.target as HTMLElement;
    
    console.log('Popup click event - Target:', target.tagName, target.className);
    console.log('Target classes:', target.classList.toString());
    
    // Check if the click is on the background overlay (the popUP div itself)
    // and not on any child elements like the coverPopup or its contents
    if (target.classList.contains('popUP')) {
      console.log('Background clicked, closing popup');
      this.closePopup1();
    } else {
      console.log('Click was not on background, target:', target.tagName, target.className);
    }
  }

  // Alternative method using mousedown event for better detection
  onPopupMouseDown(event: MouseEvent) {
    const target = event.target as HTMLElement;
    
    console.log('Popup mousedown event - Target:', target.tagName, target.className);
    console.log('Target classes:', target.classList.toString());
    
    if (target.classList.contains('popUP')) {
      console.log('Background mousedown, closing popup');
      this.closePopup1();
    } else {
      console.log('Mousedown was not on background, target:', target.tagName, target.className);
    }
  }

  // Method to handle clicks on popup content to prevent event bubbling
  onPopupContentClick(event: Event) {
    event.stopPropagation();
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
  
  // Second carousel navigation methods
  nextAISlide() {
    if (this.currentAISlide < this.buildTwinAICapabilities.length) {
      this.currentAISlide++;
    }
  }
  
  prevAISlide() {
    if (this.currentAISlide > 0) {
      this.currentAISlide--;
    }
  }
  
  // Check if AI carousel navigation buttons should be disabled
  canGoNextAI(): boolean {
    return this.currentAISlide < this.buildTwinAICapabilities.length;
  }
  
  canGoPrevAI(): boolean {
    return this.currentAISlide > 0;
  }
  
  // Arcade trigger method for carousel items
  onClickArcadeTrigger(type: string) {
    console.log(`Arcade triggered for: ${type}`);
    this.arcadeType = type;
    this.visibleArcade = true;
  }
  
  // Handle arcade lightbox close
  onArcadeClose(event: any) {
    this.visibleArcade = false;
    this.arcadeType = '';
  }
  
  ngOnDestroy() {
  try { document.body.classList.remove('white-show-wrapper'); } catch (error) { console.error('classList.remove failed on body (ngOnDestroy):', error); }
  }
}
