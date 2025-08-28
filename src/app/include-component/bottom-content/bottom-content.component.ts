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
  
  // Hover state management for Palantir-inspired design
  hoveredSection: string | null = null;
  
  constructor(
    private _btWorkflowAssistanceService: BtWorkflowAssistanceService
  ) {

  }

  ngOnInit(): void {
    // Initialize component
  }

  // Hover effect methods
  setHoveredSection(sectionId: string) {
    console.log('Setting hovered section:', sectionId);
    this.hoveredSection = sectionId;
  }

  clearHoveredSection() {
    console.log('Clearing hovered section');
    this.hoveredSection = null;
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

  ngOnDestroy() {
  }
}
