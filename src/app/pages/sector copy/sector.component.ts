import { Component } from '@angular/core';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrl: './sector.component.scss'
})
export class SectorComponent {
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
}
