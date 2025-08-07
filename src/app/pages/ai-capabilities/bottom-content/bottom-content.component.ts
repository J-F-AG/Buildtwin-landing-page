import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BtWorkflowAssistanceService } from 'buildtwin-library-ux/bt-workflow-assistance';

@Component({
  selector: 'app-bottom-content',
  templateUrl: './bottom-content.component.html',
  styleUrls: ['./bottom-content.component.scss']
})
export class BottomContentComponent implements OnInit {
  @Input() bg: any;
  @Output() slideChanged = new EventEmitter<number>();
  currentTab:any = 0;
  currentAccordion:any;
  visibleArcade: any = false;
  arcadeType: any = '';
  
  // Carousel properties
  currentSlide = 0;
  itemsPerView = 4;
  
  // AI Capabilities data
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
  
  constructor(
    private _btWorkflowAssistanceService: BtWorkflowAssistanceService
  ) {

  }

  ngOnInit(): void {
    // Create extended array with duplicates for seamless carousel
    this.carouselItems = [...this.aiCapabilities, ...this.aiCapabilities, ...this.aiCapabilities];
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
