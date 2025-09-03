import { Component, ComponentFactoryResolver, HostListener, ViewChild, ViewContainerRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';
import { BtWorkflowAssistanceService } from 'buildtwin-library-ux/bt-workflow-assistance';

@Component({
  selector: 'app-ai-capabilities-page',
  templateUrl: './ai-capabilities-page.component.html',
  styleUrls: ['./ai-capabilities-page.component.scss']
})
export class AiCapabilitiesPageComponent {

  // Carousel slide tracking
  currentSlide = 0;
  
  // Category selection
  selectedCategory = 'ai-generation';

  // Active section tracking for Capability Statement
  activeSection = 'element-ga';

  // Popup states
  showPopup = false;

  // Expandable sections state
  expandedSections = {
    one: false,
    duett: false,
    trio: false
  };

  // AI Capabilities data for different categories
  aiCapabilitiesData = {
    'ai-generation': [
      {
        id: 'element-ga',
        icon: 'assets/images/new-v2-icon1.png',
        title: 'Element GA',
        description: 'AI-powered element generation and analysis for structural engineering projects.',
        image: 'assets/images/new-v2-image1.png'
      },
      {
        id: 'rebar-drawing',
        icon: 'assets/images/new-v2-icon2.png',
        title: 'Rebar Drawing<br>(Pre-Cast & Insitu)',
        description: 'Automated generation of both precast and insitu rebar drawings with AI precision and compliance checking.',
        image: 'assets/images/new-v2-image2.png'
      }
    ],
    'ai-quality-control': [
      {
        id: 'technical-checks',
        icon: 'assets/images/new-v2-icon1.png',
        title: 'Technical Checks',
        description: 'Comprehensive technical validation system that ensures engineering accuracy and compliance.',
        image: 'assets/images/new-v2-image1.png'
      },
      {
        id: 'presentation-checks',
        icon: 'assets/images/new-v2-icon2.png',
        title: 'Presentation Checks',
        description: 'AI-powered presentation quality assessment for professional drawing standards and clarity.',
        image: 'assets/images/new-v2-image2.png'
      },
      {
        id: 'spelling-checks',
        icon: 'assets/images/new-v2-icon3.png',
        title: 'Spelling Checks',
        description: 'Automated spelling and terminology verification for technical documentation accuracy.',
        image: 'assets/images/new-v2-image3.png'
      }
    ],
    'ai-design-manager': [
      {
        id: 'cde-management',
        icon: 'assets/images/new-v2-icon1.png',
        title: 'CDE Management',
        description: 'AI-powered Common Data Environment management for seamless project collaboration and data sharing.',
        image: 'assets/images/new-v2-image1.png'
      },
      {
        id: 'rfi-tracking',
        icon: 'assets/images/new-v2-icon2.png',
        title: 'RFI Tracking',
        description: 'Intelligent Request for Information tracking and management system for project coordination.',
        image: 'assets/images/new-v2-image2.png'
      },
      {
        id: 'delivery-platform',
        icon: 'assets/images/new-v2-icon3.png',
        title: 'Delivery Platform',
        description: 'Comprehensive delivery platform management with AI-driven insights and optimization.',
        image: 'assets/images/new-v2-image3.png'
      }
    ]
  };

  // @ViewChild('HdBannerNewComp', { read: ViewContainerRef, static: true })
  // public HdBannerNewComp: ViewContainerRef;
  // @ViewChild('HdServicesComp', { read: ViewContainerRef, static: true })
  // public HdServicesComp: ViewContainerRef;
  // @ViewChild('HdProvidersComp', { read: ViewContainerRef, static: true })
  // public HdProvidersComp: ViewContainerRef;
  // @ViewChild('HdDiscoverProjectsComp', { read: ViewContainerRef, static: true })
  // public HdDiscoverProjectsComp: ViewContainerRef;
  // @ViewChild('HdWhyBuildtwinComp', { read: ViewContainerRef, static: true })
  // public HdWhyBuildtwinComp: ViewContainerRef;
  // @ViewChild('HdIntegrationsComp', { read: ViewContainerRef, static: true })
  // public HdIntegrationsComp: ViewContainerRef;
  // @ViewChild('HdTestimonialsComp', { read: ViewContainerRef, static: true })
  // public HdTestimonialsComp: ViewContainerRef;
  // @ViewChild('HdGoodCompanyComp', { read: ViewContainerRef, static: true })
  // public HdGoodCompanyComp: ViewContainerRef;
  // @ViewChild('HdNavbarComp', { read: ViewContainerRef, static: true })
  // public HdNavbarComp: ViewContainerRef;
  // @ViewChild('HdFooterComp', { read: ViewContainerRef, static: true })
  // public HdFooterComp: ViewContainerRef;

  activeState: number = 1
  // title = 'BuildTwin - the hub for engineering AI software, projects and training';
  FixedDiv: any
  FixedDivPositionTop: any
  fixedDIvOffsetTop: any
  scrollPosition: any

  // scrolled div 

  scrollActivated: any
  scrollDivOffsettop: any
  scrolledDivHeight: any
  fixedElement: any

  constructor(private titleService: Title,private router: Router, private resolver: ComponentFactoryResolver, public _languageService: LanguageService, private _btWorkflowAssistanceService: BtWorkflowAssistanceService) { 

    router.events.subscribe((val) => {
      setTimeout(() => {
        this.scrollActivated = document.getElementById('scrollActivated');
        if(this.scrollActivated){
          this.scrollDivOffsettop = this.scrollActivated.getBoundingClientRect().top
          this.scrolledDivHeight = this.scrollActivated.getBoundingClientRect().height
          console.log(this.scrollDivOffsettop,this.scrolledDivHeight);
        } else {
          // console.error('Element with ID scrollActivated not found');
        }
        
      }, 2000);
  });
    
  }

  ngOnInit() {
    console.log('AI Capabilities Page initialized - TEST CHANGE');
    console.log('Initial selected category:', this.selectedCategory);
    console.log('Available categories:', Object.keys(this.aiCapabilitiesData));
    // this.loadHdNavbarComp()
    // this.loadHdFooterComp()
    // this.loadHdBannerNewComp()
    // this.loadHdServicesComp()
    // this.loadHdProvidersComp()
    // this.loadHdDiscoverProjectsComp()
    // this.loadHdWhyBuildtwinComp()
    // this.loadHdIntegrationsComp()
    // this.loadHdTestimonialsComp()
    // this.loadHdGoodCompanyComp()
    // this.titleService.setTitle(this.title);

  
  }

  callStatus() {
    this.showPopup = true;
  }

  closePopupStatus($event: any) {
    this.showPopup = false;
  }

  // Handle carousel slide changes
  onSlideChanged(slideIndex: number) {
    this.currentSlide = slideIndex;
  }

  // Category selection function
  selectCategory(category: string) {
    console.log('Selecting category:', category);
    console.log('Available categories:', Object.keys(this.aiCapabilitiesData));
    console.log('Data for selected category:', this.aiCapabilitiesData[category]);
    this.selectedCategory = category;
    this.currentSlide = 0; // Reset to first slide when changing category
    console.log('Selected category updated to:', this.selectedCategory);
  }

  // Schedule Demo function
  scheduleDemo() {
    this._btWorkflowAssistanceService.hubspotPopup.next({});
  }


  @HostListener('window:scroll', ['$event'])
  handleScroll(event: any) {
    this.FixedDiv = document.getElementById('scrollActivated');
    if(this.FixedDiv){
      this.FixedDiv = this.FixedDiv.getBoundingClientRect().top;
      let topscroll = this.scrollDivOffsettop - this.FixedDiv
      let winH = window.innerHeight
      console.log(winH);
      
      let totalScroll = Number(this.scrollDivOffsettop + this.scrolledDivHeight) - 300
      this.fixedElement = document.getElementById('scrollActivated');
  
      // inside active 
      if (this.FixedDiv < 200 && totalScroll > topscroll + 200) {
        this.fixedElement.classList.add("fixed")
        let activeELe = document.querySelectorAll('[data-ele]');
        activeELe.forEach((item, index) => {
          if (item.getBoundingClientRect().top < 500) {
            this.activeState = index + 1;
            item.classList.add("active")
          }
          else {
            item.classList.remove("active")
          }
  
        })
  
      }
      else {
        this.fixedElement.classList.remove("fixed")
  
      }
    }

    // Track active section for Capability Statement
    this.updateActiveSection();
  }

  // Update active section based on scroll position
  updateActiveSection() {
    const sections = [
      'element-ga',
      'load-analysis', 
      'foundation-designer',
      'beam-optimizer',
      'title-block-validation',
      'element-positioning-checks',
      'dimensional-accuracy',
      'visual-standards-compliance',
      'generate-precast',
      'generate-insitu',
      'revision-opening',
      'revision-geometry',
      'revision-dowel',
      'revision-mep'
    ];

    const scrollPosition = window.scrollY + 200; // Offset for better detection

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          this.activeSection = sectionId;
          break;
        }
      }
    }
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      // Update active section
      this.activeSection = sectionId;
      
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

  // Toggle section expansion
  toggleSection(section: 'one' | 'duett' | 'trio') {
    this.expandedSections[section] = !this.expandedSections[section];
  }

  // Check if a section has more than 3 items
  hasMoreThanThreeItems(section: 'one' | 'duett' | 'trio'): boolean {
    const itemCounts = {
      one: 4,     // Currently has 4 items
      duett: 4,   // Currently has 4 items  
      trio: 6     // Currently has 6 items
    };
    return itemCounts[section] > 3;
  }
  // async loadHdNavbarComp(){
  //   if (this.HdNavbarComp) {
  //     this.HdNavbarComp.clear();
  //   }
  //   try {
  //     let MyComponent;
  //     import('../../../pages/includes/hd-navbar/hd-navbar.module').then(m => {
  //       MyComponent = m.HdNavbarModule.HdNavbarComponent();//ele['CreateIssueModule']['ProjectSelectComponent']();
  //       if (MyComponent) {
  //         const factory = this.resolver.resolveComponentFactory(MyComponent);
  //         let componentRef = this.HdNavbarComp.createComponent(factory);
  //         const instance = componentRef.instance;
  //         // instance['RFIMode'] = "true";
  //         // instance['companySelected'] = this.selectedCompanyName.split('.')[0];
  //       }
  //     });

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  // async loadHdFooterComp(){
  //   if (this.HdFooterComp) {
  //     this.HdFooterComp.clear();
  //   }
  //   try {
  //     let MyComponent;
  //     import('../../../pages/includes/hd-footer/hd-footer.module').then(m => {
  //       MyComponent = m.HdFooterModule.HdFooterComponent();//ele['CreateIssueModule']['ProjectSelectComponent']();
  //       if (MyComponent) {
  //         const factory = this.resolver.resolveComponentFactory(MyComponent);
  //         let componentRef = this.HdFooterComp.createComponent(factory);
  //         const instance = componentRef.instance;
  //         // instance['RFIMode'] = "true";
  //         // instance['companySelected'] = this.selectedCompanyName.split('.')[0];
  //       }
  //     });

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  // async loadHdBannerNewComp(){
  //   if (this.HdBannerNewComp) {
  //     this.HdBannerNewComp.clear();
  //   }
  //   try {
  //     let MyComponent;
  //     import('../hd-banner-new/hd-banner-new.module').then(m => {
  //       MyComponent = m.HdBannerNewModule.HdBannerNewComponent();//ele['CreateIssueModule']['ProjectSelectComponent']();
  //       if (MyComponent) {
  //         const factory = this.resolver.resolveComponentFactory(MyComponent);
  //         let componentRef = this.HdBannerNewComp.createComponent(factory);
  //         const instance = componentRef.instance;
  //         // instance['RFIMode'] = "true";
  //         // instance['companySelected'] = this.selectedCompanyName.split('.')[0];
  //       }
  //     });

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  // async loadHdServicesComp(){
  //   if (this.HdServicesComp) {
  //     this.HdServicesComp.clear();
  //   }
  //   try {
  //     let MyComponent;
  //     import('../hd-services/hd-services.module').then(m => {
  //       MyComponent = m.HdServicesModule.HdServicesComponent();//ele['CreateIssueModule']['ProjectSelectComponent']();
  //       if (MyComponent) {
  //         const factory = this.resolver.resolveComponentFactory(MyComponent);
  //         let componentRef = this.HdServicesComp.createComponent(factory);
  //         const instance = componentRef.instance;
  //         // instance['RFIMode'] = "true";
  //         // instance['companySelected'] = this.selectedCompanyName.split('.')[0];
  //       }
  //     });

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  // async loadHdProvidersComp(){
  //   if (this.HdProvidersComp) {
  //     this.HdProvidersComp.clear();
  //   }
  //   try {
  //     let MyComponent;
  //     import('../hd-providers/hd-providers.module').then(m => {
  //       MyComponent = m.HdProvidersModule.HdProvidersComponent();//ele['CreateIssueModule']['ProjectSelectComponent']();
  //       if (MyComponent) {
  //         const factory = this.resolver.resolveComponentFactory(MyComponent);
  //         let componentRef = this.HdProvidersComp.createComponent(factory);
  //         const instance = componentRef.instance;
  //         // instance['RFIMode'] = "true";
  //         // instance['companySelected'] = this.selectedCompanyName.split('.')[0];
  //       }
  //     });

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  // async loadHdDiscoverProjectsComp(){
  //   if (this.HdDiscoverProjectsComp) {
  //     this.HdDiscoverProjectsComp.clear();
  //   }
  //   try {
  //     let MyComponent;
  //     import('../hd-discover-projects/hd-discover-projects.module').then(m => {
  //       MyComponent = m.HdDiscoverProjectsModule.HdDiscoverProjectsComponent();//ele['CreateIssueModule']['ProjectSelectComponent']();
  //       if (MyComponent) {
  //         const factory = this.resolver.resolveComponentFactory(MyComponent);
  //         let componentRef = this.HdDiscoverProjectsComp.createComponent(factory);
  //         const instance = componentRef.instance;
  //         // instance['RFIMode'] = "true";
  //         // instance['companySelected'] = this.selectedCompanyName.split('.')[0];
  //       }
  //     });

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  // async loadHdWhyBuildtwinComp(){
  //   if (this.HdWhyBuildtwinComp) {
  //     this.HdWhyBuildtwinComp.clear();
  //   }
  //   try {
  //     let MyComponent;
  //     import('../hd-why-buildtwin/hd-why-buildtwin.module').then(m => {
  //       MyComponent = m.HdWhyBuildtwinModule.HdWhyBuildtwinComponent();//ele['CreateIssueModule']['ProjectSelectComponent']();
  //       if (MyComponent) {
  //         const factory = this.resolver.resolveComponentFactory(MyComponent);
  //         let componentRef = this.HdWhyBuildtwinComp.createComponent(factory);
  //         const instance = componentRef.instance;
  //         // instance['RFIMode'] = "true";
  //         // instance['companySelected'] = this.selectedCompanyName.split('.')[0];
  //       }
  //     });

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  // async loadHdIntegrationsComp(){
  //   if (this.HdIntegrationsComp) {
  //     this.HdIntegrationsComp.clear();
  //   }
  //   try {
  //     let MyComponent;
  //     import('../../includes/hd-integrations/hd-integrations.module').then(m => {
  //       MyComponent = m.HdIntegrationsModule.HdIntegrationsComponent();//ele['CreateIssueModule']['ProjectSelectComponent']();
  //       if (MyComponent) {
  //         const factory = this.resolver.resolveComponentFactory(MyComponent);
  //         let componentRef = this.HdIntegrationsComp.createComponent(factory);
  //         const instance = componentRef.instance;
  //         // instance['RFIMode'] = "true";
  //         // instance['companySelected'] = this.selectedCompanyName.split('.')[0];
  //       }
  //     });

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  // async loadHdTestimonialsComp(){
  //   if (this.HdTestimonialsComp) {
  //     this.HdTestimonialsComp.clear();
  //   }
  //   try {
  //     let MyComponent;
  //     import('../hd-testimonials/hd-testimonials.module').then(m => {
  //       MyComponent = m.HdTestimonialsModule.HdTestimonialsComponent();//ele['CreateIssueModule']['ProjectSelectComponent']();
  //       if (MyComponent) {
  //         const factory = this.resolver.resolveComponentFactory(MyComponent);
  //         let componentRef = this.HdTestimonialsComp.createComponent(factory);
  //         const instance = componentRef.instance;
  //         // instance['RFIMode'] = "true";
  //         // instance['companySelected'] = this.selectedCompanyName.split('.')[0];
  //       }
  //     });

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  // async loadHdGoodCompanyComp(){
  //   if (this.HdGoodCompanyComp) {
  //     this.HdGoodCompanyComp.clear();
  //   }
  //   try {
  //     let MyComponent;
  //     import('../hd-good-company/hd-good-company.module').then(m => {
  //       MyComponent = m.HdGoodCompanyModule.HdGoodCompanyComponent();//ele['CreateIssueModule']['ProjectSelectComponent']();
  //       if (MyComponent) {
  //         const factory = this.resolver.resolveComponentFactory(MyComponent);
  //         let componentRef = this.HdGoodCompanyComp.createComponent(factory);
  //         const instance = componentRef.instance;
  //         instance['count'] = 5;
  //         // instance['companySelected'] = this.selectedCompanyName.split('.')[0];
  //       }
  //     });

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
 
}