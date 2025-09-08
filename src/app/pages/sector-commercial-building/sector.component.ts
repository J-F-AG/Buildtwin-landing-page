import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sector-commercial-building',
  templateUrl: './sector.component.html',
  styleUrls: ['../sector/sector.component.scss','./sector.component.scss']
})
export class SectorCommercialBuildingComponent {
  constructor(@Inject(PLATFORM_ID) public platformId: Object) {}
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
      let element = null;
      if (isPlatformBrowser(this.platformId)) {
        element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Align the section at the top of the viewport
          });
        }
      }
    } catch (error) {
      // SSR/document not available
    }
  }
}
