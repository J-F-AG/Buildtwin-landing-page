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
        id: 'ai-generated-drawings',
        icon: 'assets/images/new-v2-icon2.png',
        title: 'AI Generated Drawings',
        description: 'Automatically generate detailed engineering drawings with AI assistance, reducing manual drafting time significantly.',
        image: 'assets/images/new-v2-image2.png'
      },
      {
        id: 'ai-design-manager',
        icon: 'assets/images/new-v2-icon3.png',
        title: 'AI Design Manager',
        description: 'Intelligent design management system that optimizes workflows and ensures design consistency across projects.',
        image: 'assets/images/new-v2-image3.png'
      },
      {
        id: 'ai-modeling',
        icon: 'assets/images/new-v2-icon1.png',
        title: 'AI 3D Modeling',
        description: 'Advanced 3D modeling capabilities powered by AI for rapid prototyping and design iteration.',
        image: 'assets/images/new-v2-image1.png'
      },
      {
        id: 'ai-documentation',
        icon: 'assets/images/new-v2-icon4.png',
        title: 'AI Documentation',
        description: 'Automated generation of technical documentation and specifications with AI accuracy.',
        image: 'assets/images/new-v2-image4.png'
      }
    ],
    'ai-quality-control': [
      {
        id: 'quality-control-drawings',
        icon: 'assets/images/new-v2-icon1.png',
        title: 'AI Quality Control for Structural Drawings',
        description: 'Comprehensive quality assessment system that validates structural drawings for accuracy and compliance.',
        image: 'assets/images/new-v2-image1.png'
      },
      {
        id: 'error-detection',
        icon: 'assets/images/new-v2-icon2.png',
        title: 'AI Error Detection',
        description: 'Advanced error detection algorithms that identify potential issues in engineering designs before they become problems.',
        image: 'assets/images/new-v2-image2.png'
      },
      {
        id: 'compliance-checker',
        icon: 'assets/images/new-v2-icon3.png',
        title: 'AI Compliance Checker',
        description: 'Automated compliance verification ensuring all designs meet industry standards and regulations.',
        image: 'assets/images/new-v2-image3.png'
      },
      {
        id: 'quality-reports',
        icon: 'assets/images/new-v2-icon4.png',
        title: 'AI Quality Reports',
        description: 'Detailed quality assessment reports generated automatically with actionable insights and recommendations.',
        image: 'assets/images/new-v2-image4.png'
      }
    ],
    'ai-design-manager': [
      {
        id: 'workflow-optimization',
        icon: 'assets/images/new-v2-icon1.png',
        title: 'Workflow Optimization',
        description: 'AI-powered workflow management that streamlines design processes and reduces bottlenecks.',
        image: 'assets/images/new-v2-image1.png'
      },
      {
        id: 'design-consistency',
        icon: 'assets/images/new-v2-icon2.png',
        title: 'Design Consistency',
        description: 'Ensure uniform design standards and maintain consistency across all project deliverables.',
        image: 'assets/images/new-v2-image2.png'
      },
      {
        id: 'resource-allocation',
        icon: 'assets/images/new-v2-icon3.png',
        title: 'Resource Allocation',
        description: 'Intelligent resource management for optimal team utilization and project efficiency.',
        image: 'assets/images/new-v2-image3.png'
      },
      {
        id: 'project-tracking',
        icon: 'assets/images/new-v2-icon4.png',
        title: 'Project Tracking',
        description: 'Real-time project monitoring with AI insights for better decision making and timeline management.',
        image: 'assets/images/new-v2-image4.png'
      }
    ],
    // Backward compatibility if any references still use the old key
    'ai-agents': []
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
