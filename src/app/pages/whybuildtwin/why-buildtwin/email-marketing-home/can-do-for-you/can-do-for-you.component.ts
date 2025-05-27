import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, ViewChild, Inject, Input, PLATFORM_ID } from '@angular/core';
// import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-can-do-for-you',
  templateUrl: './can-do-for-you.component.html',
  styleUrl: './can-do-for-you.component.scss'
})
export class CanDoForYouComponent {

  factorySlider: OwlOptions | null = null;
  isBrowser: boolean;

  prevNav:boolean = false;
  nextNav:boolean = true;
  effect = 'scrollx';
  // @ViewChild(NzCarouselComponent, { static: false }) myCarousel: NzCarouselComponent;
  activeObj = {}
  constructor( @Inject(PLATFORM_ID) private platformId: Object) { 
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.sliderInit()
  }

  sliderInit() {
    this.factorySlider = {
      nav: true,
      margin: 0,  // Adjust as needed
      dots: false,
      // loop: true,
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
        }
      }
    };
  }
  
  // prev() {
  //   this.myCarousel.pre();
  //   if(this.myCarousel.activeIndex === 0) {
  //     this.prevNav = false;
  //   }

  //   if(this.myCarousel.activeIndex === 1) {
  //     this.nextNav = true;
  //   }
  // }

  // next() {
  //   this.myCarousel.next();
  //   if(this.myCarousel.activeIndex === 1) {
  //     this.prevNav = true;
  //   }

  //   if(this.myCarousel.activeIndex === 2) {
  //     this.nextNav = false;
  //   }
  // }

  qualityArray = [
    {
      // icon: 'assets/images/vendor/icon1.png',
      title: 'E-Mail',
      addClass: 'v2',
      tools: 'Exchange, own-Email Server',
      child: [
        {
          // icon: 'assets/images/vendor/icon2.png',
          title: 'Compliant E-Mail Inbox for Teams',
          tools: 'Manual'
          // description: 'Visibility & promotion on all channels',
        },
        {
          // icon: 'assets/images/vendor/icon3.png',
          title: 'Summarizing E-Mail and showing 360° technical context and history',
          tools: 'Manual'
          // description: 'Easy to bid private and public projects',
        },
        {
          // icon: 'assets/images/vendor/icon4.png',
          title: 'Tracking of discussed topics, timelines, etc. and updating project management',
          tools: 'Manual'
          // description: 'Partner with business to deliver results',
        },
        {
          // icon: 'assets/images/vendor/icon5.png',
          title: 'Drafting respond e-mails with relevant context',
          tools: 'Manual'
          // description: 'Get qualified for new markets / clients',
        },
      ]
      // description: 'One Feed | Submission & RFI Training | AI Assistant',
    },
    
    {
      // icon: 'assets/images/vendor/icon6.png',
      title: 'File Management',
      addClass: 'v2',
      tools: 'Sharepoint, Active Directory & Manual management',
      child: [
        {
          // icon: 'assets/images/vendor/icon7.png',
          title: 'Automated Filemanagement - Save & Done',
          tools: 'Manual upload & manage'
          // description: 'Attract better offers with marketing and <br>legal guidance.',
        },
        {
          // icon: 'assets/images/vendor/icon8.png',
          title: 'Files are available in the Cloud across different offices / for clients ',
          tools: 'Not available if not uploaded'
          // description: 'You have our acquisition expertise from <br>start to close.',
        },
        {
          // icon: 'assets/images/vendor/icon9.png',
          title: 'Compliant Backup / redundant storage',
          tools: 'Local IT infrastructure required'
          // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
        },
        {
          // icon: 'assets/images/vendor/icon9.png',
          title: 'Automated Single Point of Truth (consolidating shared Files via E-Mails, etc. with files saved locally)',
          tools: false
          // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
        }
      ]
      // description: 'You required support on-site from a <br>technical specialist?',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'CDE Integration',
      addClass: 'v2',
      tools: 'No software available',
      child: [
        {
          // icon: 'assets/images/vendor/icon9.png',
          title: 'Consolidate Client CDE into your workenviromment - 1 System to manage all client systems',
          tools: 'Manual'
          // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
        },
        {
          // icon: 'assets/images/vendor/icon9.png',
          title: 'Automated project documentation',
          tools: 'Manual'
          // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
        },
        {
          // icon: 'assets/images/vendor/icon9.png',
          title: 'Detailed Reports of: Revisions, Type of comments, etc.',
          tools: 'Manual'
          // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
        }
      ]
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'AI based Project Management System',
      addClass: 'v2',
      tools: 'Mostly not specifically designed for engineering',
      child: [
        {
          // icon: 'assets/images/vendor/icon9.png',
          title: 'AI based Project Planning and Scheduling',
          tools: 'Manual'
          // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
        },
        {
          // icon: 'assets/images/vendor/icon9.png',
          title: 'AI based Resource Management & Allocation',
          tools: 'Manual'
          // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
        },
        {
          // icon: 'assets/images/vendor/icon9.png',
          title: 'AI based Time Tracking',
          tools: 'Manual'
          // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
        }
      ]
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'HCM',
      addClass: 'v2',
      tools: 'Manual HR Function',
      child: [
        {
          // icon: 'assets/images/vendor/icon9.png',
          title: 'Manage your teams, apply your policies (Holidays, etc.) while complying with local law',
          tools: 'Manual HR Function'
          // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
        },
        {
          // icon: 'assets/images/vendor/icon9.png',
          title: 'Automate Leave applications detailed  HR reports',
          tools: 'Manual HR Function'
          // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
        },
        {
          // icon: 'assets/images/vendor/icon9.png',
          title: 'Automate Asset Management and Tracking according to your policy',
          tools: 'Manual HR Function'
          // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
        },
        {
          // icon: 'assets/images/vendor/icon9.png',
          title: 'Resignation & Peformance Evalulation',
          tools: 'Manual HR Function'
          // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
        },
        {
          // icon: 'assets/images/vendor/icon9.png',
          title: 'Calendar module with leaves, meetings & interview integration across platform',
          tools: 'Manual HR Function'
          // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
        }
      ]
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'Jobs',
      addClass: 'v2',
      tools: 'Manual HR Function',
      child: [
        {
          // icon: 'assets/images/vendor/icon9.png',
          title: 'Manage your teams, apply your policies (Holidays, etc.) while complying with local law',
          tools: 'Manual HR Function'
          // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
        },
        {
          // icon: 'assets/images/vendor/icon9.png',
          title: 'Automate Leave applications detailed  HR reports',
          tools: 'Extra Software, not integreated / AI powered'
          // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
        },
        {
          // icon: 'assets/images/vendor/icon9.png',
          title: 'AI based Resume Management & Interview Scheduling with video Interviews, questions & answer',
          tools: 'Extra HCM Software'
          // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
        },
        {
          // icon: 'assets/images/vendor/icon9.png',
          title: 'Customized Onboarding from interview to hiring',
          tools: 'Extra HCM Software'
          // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
        }
      ]
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    }
  ];
  toggleAccordion(i) {
    if(this.activeObj[i]){
      this.activeObj[i] = false
    }else {
      this.activeObj[i] = true
    }
  }

}
