import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-steel-detailing-software',
  templateUrl: './sector.component.html',
  styleUrls: ['../../sector/sector.component.scss','./sector.component.scss']
})
export class StructuralSteelDetailingSoftwareComponent {
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



// app-structural-steel-detailing-software-ample-projects
// app-structural-steel-detailing-software
// app-structural-steel-detailing-software-meeting-standards
// app-structural-steel-detailing-software-get-started
// app-structural-steel-detailing-software-direct-booking
// app-structural-steel-detailing-software-dc-europe
// app-structural-steel-detailing-software-data-center-section
// app-structural-steel-detailing-software-about-data-center-section

