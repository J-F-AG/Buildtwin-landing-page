import { Component } from '@angular/core';

@Component({
  selector: 'app-architecture-design-services',
  templateUrl: './sector.component.html',
  styleUrls: ['../../sector/sector.component.scss','./sector.component.scss']
})
export class ArchitectureDesignServicesComponent {
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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Align the section at the top of the viewport
      });
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



// app-architecture-design-services-ample-projects
// app-architecture-design-services
// app-architecture-design-services-meeting-standards
// app-architecture-design-services-get-started
// app-architecture-design-services-direct-booking
// app-architecture-design-services-dc-europe
// app-architecture-design-services-data-center-section
// app-architecture-design-services-about-data-center-section

