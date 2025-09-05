import { Component } from '@angular/core';

@Component({
  selector: 'app-sector-airports',
  templateUrl: './sector.component.html',
  styleUrls: ['../sector/sector.component.scss','./sector.component.scss']
})
export class SectorAirportsComponent {
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
      console.error('getElementById failed in scrollToSection:', error);
    }
  }
}
