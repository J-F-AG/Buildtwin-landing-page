import { Component } from '@angular/core';

@Component({
  selector: 'app-building-code-bs',
  templateUrl: './sector.component.html',
  styleUrls: ['../sector/sector.component.scss','./sector.component.scss']
})
export class BuildingCodeBSComponent {
  AvailableServicesToggle : boolean = false;
  AvailableServicesToggleStatusHoverStatus:boolean = true;


  AvailableServicesToggleStatusHover(){
    if(this.AvailableServicesToggleStatusHoverStatus){
      this.AvailableServicesToggleStatusHoverStatus = false;
      this.AvailableServicesToggleStatus(true)
    }
  }
  AvailableServicesToggleStatus(type?){
    if(type && !this.AvailableServicesToggle) {
      this.AvailableServicesToggle = type
    }
    if(!type){
      this.AvailableServicesToggle = !this.AvailableServicesToggle;
    }
  }

  scrollToSection(sectionId: string): void {
    try {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start' // Align the section at the top of the viewport
        });
      }
    } catch (error) {
      
    }
  }
  
}

// BuildingCodeComponent
// BuildingCodeSampleProjectsComponent
// BuildingCodeMeetingStandardsComponent
// BuildingCodeGetStartedComponent
// BuildingCodeDirectBookingComponent
// BuildingCodeDcEuropeComponent
// BuildingCodeDataCenterSectionComponent
// BuildingCodeAboutDataCenterSectionComponent



// app-building-code-ample-projects
// app-building-code
// app-building-code-meeting-standards
// app-building-code-get-started
// app-building-code-direct-booking
// app-building-code-dc-europe
// app-building-code-data-center-section
// app-building-code-about-data-center-section

