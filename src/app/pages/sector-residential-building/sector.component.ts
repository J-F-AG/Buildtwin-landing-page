import { Component } from '@angular/core';

@Component({
  selector: 'app-sector-residential-building',
  templateUrl: './sector.component.html',
  styleUrls: ['../sector/sector.component.scss','./sector.component.scss']
})
export class SectorResidentialBuildingComponent {
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
