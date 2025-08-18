import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';
import { ArcadeService } from 'src/app/include-component/arcade-container/arcade.service';
import { isPlatformBrowser } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-delivery-plattform',
  templateUrl: './delivery-plattform.component.html',
  styleUrl: './delivery-plattform.component.scss'
})
export class DeliveryPlattformComponent implements OnInit {
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
  isBrowser: boolean;
  currentSlide: number = 0;

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
  
  // Feature carousel options
  featureCarouselOptions = {
    nav: true,
    margin: 20,
    dots: false,
    loop: true,
    autoplay: false,
    autoplayHoverPause: true,
    navText: [
      "<i class='ti ti-chevron-left'></i>",
      "<i class='ti ti-chevron-right'></i>",
    ],
    stagePadding: 0,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  };
  
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

  // Feature cards data arrays
  featureCardsArray = [
    {
      icon: 'assets/images/icons/icon1.png',
      title: 'Track your submissions',
      description: 'Assessment: This feature offers a centralized tracking system, likely replacing manual methods like spreadsheets, with robust search and filtering for efficiency.',
      screenshot: 'assets/images/ui/track-submissions-screenshot.png'
    },
    {
      icon: 'assets/images/icons/icon2.png',
      title: 'View files and comment',
      description: 'Facilitates collaborative review by allowing direct feedback on documents, reducing reliance on external communication tools.',
      screenshot: 'assets/images/ui/view-files-comment-screenshot.png'
    },
    {
      icon: 'assets/images/icons/icon1.png',
      title: 'Share with ease',
      description: 'Streamlines file distribution with an intuitive interface, potentially eliminating the need for third-party services like WeTransfer.',
      screenshot: 'assets/images/ui/share-with-ease-screenshot.png'
    },
    {
      icon: 'assets/images/icons/icon2.png',
      title: 'Filters and Workflow in min.',
      description: 'Enhances task management by providing customizable views and quick access to critical information, minimizing workflow bottlenecks.',
      screenshot: 'assets/images/ui/filters-workflow-screenshot.png'
    }
  ];

  aiFeatureCardsArray = [
    {
      icon: 'assets/images/icons/icon1.png',
      title: 'Automated Task Management',
      description: 'Reduces manual oversight by prioritizing and assigning tasks, leveraging AI for efficient workflow management.',
      screenshot: 'assets/images/ui/automated-tasks-screenshot.png'
    },
    {
      icon: 'assets/images/icons/icon2.png',
      title: 'Upload to Client CDE',
      description: 'Integrates with external systems for compliant and efficient handovers, critical for construction workflows.',
      screenshot: 'assets/images/ui/cde-integration-screenshot.png'
    }
  ];

  // Carousel options
  featureCardsSlider: OwlOptions = {
    nav: true,
    margin: 20,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
      "<i class='ti ti-chevron-left'></i>",
      "<i class='ti ti-chevron-right'></i>",
    ],
    stagePadding: 0,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  };

  aiFeatureCardsSlider: OwlOptions = {
    nav: true,
    margin: 20,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
      "<i class='ti ti-chevron-left'></i>",
      "<i class='ti ti-chevron-right'></i>",
    ],
    stagePadding: 0,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  };
  constructor(
    private titleService: Title,
    private router: Router,
    public _languageService: LanguageService,
    private arcadeService: ArcadeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
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

  onSlideChanged(event: any) {
    this.currentSlide = event.startPosition;
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
  ngOnDestroy() {
    try {
      document.body.classList.remove('white-show-wrapper');
    } catch (error) {
      
    }
  }
}
