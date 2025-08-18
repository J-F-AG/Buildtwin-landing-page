import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { BtWorkflowAssistanceService } from 'buildtwin-library-ux/bt-workflow-assistance';

@Component({
  selector: 'app-bottom-content',
  templateUrl: './bottom-content.component.html',
  styleUrls: ['./bottom-content.component.scss']
})
export class BottomContentComponent implements OnInit, OnChanges {
  @Input() bg: any;
  @Input() selectedCategory: string = 'ai-generation';
  @Output() slideChanged = new EventEmitter<number>();
  currentTab:any = 0;
  currentAccordion:any;
  visibleArcade: any = false;
  arcadeType: any = '';
  
  // Carousel properties
  currentSlide = 0;
  itemsPerView = 4;
  
  // AI Capabilities data for different categories
  aiCapabilitiesData = {
    'ai-generation': [
      {
        id: 'element-ga',
        icon: 'assets/images/new-v2-icon1.png',
        title: 'Element GA',
        description: 'AI-powered element generation and analysis for structural engineering projects.',
        image: 'assets/images/new-v2-image2.png'
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
        image: 'assets/images/new-v2-icon2.png'
      },
      {
        id: 'spelling-checks',
        icon: 'assets/images/new-v2-icon3.png',
        title: 'Spelling Checks',
        description: 'Automated spelling and terminology verification for technical documentation accuracy.',
        image: 'assets/images/new-v2-icon3.png'
      }
    ],
    'ai-capability': [
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
    ],
    // Backward compatibility if any references still use the old key
    'ai-agents': [],
    'ai-design-manager': []
  };
  
  // Current AI Capabilities based on selected category
  aiCapabilities: any[] = [];
  
  // Create extended array with duplicates for carousel effect
  carouselItems: any[] = [];
  
  constructor(
    private _btWorkflowAssistanceService: BtWorkflowAssistanceService
  ) {

  }

  ngOnInit(): void {
    this.updateCapabilities();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges triggered:', changes);
    if (changes['selectedCategory']) {
      console.log('Category changed from', changes['selectedCategory'].previousValue, 'to', changes['selectedCategory'].currentValue);
      this.updateCapabilities();
    }
  }

  updateCapabilities(): void {
    console.log('Updating capabilities for category:', this.selectedCategory);
    // Set current AI capabilities based on selected category
    this.aiCapabilities = this.aiCapabilitiesData[this.selectedCategory] || this.aiCapabilitiesData['ai-generation'];
    console.log('Updated aiCapabilities:', this.aiCapabilities);
    // Create extended array with duplicates for seamless carousel
    this.carouselItems = [...this.aiCapabilities, ...this.aiCapabilities, ...this.aiCapabilities];
    // Reset to first slide when category changes
    this.currentSlide = 0;
  }
  tabUpdated(index){
    this.currentTab = index;
  }
  accordionUpdated(index){
    if(this.currentAccordion == index){
      this.currentAccordion = null;
      return;
    }else {
      this.currentAccordion = index;
    }
  }
  register() {
    let saveProjectData = localStorage.getItem("saveProjectData");
    console.log(saveProjectData)
        let url = `https://buildtwin.com/get-started/`;
        let configUrl = JSON.parse(localStorage.getItem("configUrl"));
        if (configUrl['operateUrl'].includes("development")) {
          url = `http://buildtwin.dev.s3-website.ap-south-1.amazonaws.com/get-started/`;
        }
       
        console.log(url);
        window.location.href=url
      }

  scrollToSection(sectionId: string) {
    this.currentTab = sectionId;
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
onClickArcadeTrigger(type){
  this.arcadeType = type
  this.visibleArcade = true;
}
visibleTogggle(status) {
  if(status['type'] == 'close') {
    this.visibleArcade = false;
  }
}
ScheduleaDemo(){
  this._btWorkflowAssistanceService.hubspotPopup.next({})
}

  // Handle carousel slide changes
  onSlideChanged(slideIndex: number) {
    this.currentSlide = slideIndex;
  }

  // Carousel navigation methods
  nextSlide() {
    if (this.currentSlide < this.aiCapabilities.length) {
      this.currentSlide++;
      this.slideChanged.emit(this.currentSlide);
    }
  }
  
  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.slideChanged.emit(this.currentSlide);
    }
  }
  
  // Check if navigation buttons should be disabled
  canGoNext(): boolean {
    return this.currentSlide < this.aiCapabilities.length;
  }
  
  canGoPrev(): boolean {
    return this.currentSlide > 0;
  }

  ngOnDestroy() {
  }

}
