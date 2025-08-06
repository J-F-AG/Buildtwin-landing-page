import { Component, Input, OnInit } from '@angular/core';
import { BtWorkflowAssistanceService } from 'buildtwin-library-ux/bt-workflow-assistance';

@Component({
  selector: 'app-bottom-content',
  templateUrl: './bottom-content.component.html',
  styleUrls: ['./bottom-content.component.scss']
})
export class BottomContentComponent implements OnInit {
  @Input() bg: any;
  currentTab:any = 0;
  currentAccordion:any;
  visibleArcade: any = false;
  arcadeType: any = ''
  arcadeFeatures = [
  {
    id: 'track-submissions',
    icon: 'assets/images/new-v2-icon1.png',
    title: 'Track your submissions',
    description: 'Centralized tracking system replacing spreadsheets.',
    image: 'assets/images/new-v2-image1.png',
    category: 'Featured'
  },
  {
    id: 'view-files-comment',
    icon: 'assets/images/new-v2-icon2.png',
    title: 'View files and comment',
    description: 'Facilitates collaborative review with direct feedback.',
    image: 'assets/images/new-v2-image2.png',
    category: 'Research'
  },
  {
    id: 'share-with-ease',
    icon: 'assets/images/new-v2-icon3.png',
    title: 'Share <br>with ease',
    description: 'Streamlines file sharing without third-party tools.',
    image: 'assets/images/new-v2-image3.png',
    category: 'Featured'
  },
  {
    id: 'project-workflow',
    icon: 'assets/images/new-v2-icon4.png',
    title: 'Filters and Workflow in min.',
    description: 'Enhances task management with quick views.',
    image: 'assets/images/new-v2-image4.png',
    category: 'Research'
  }
];
categoryArray = ['Featured', 'Research']
selectedTab = '';
  constructor(
    private _btWorkflowAssistanceService: BtWorkflowAssistanceService
  ) {

  }

  ngOnInit(): void {
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
onSelectTab(tab: string) {
  if(this.selectedTab == tab) {
    this.selectedTab = ''
    return
  }
  this.selectedTab = tab;
}
  ngOnDestroy() {
  }

}
