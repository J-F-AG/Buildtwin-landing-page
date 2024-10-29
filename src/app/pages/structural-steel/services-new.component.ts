import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-steel-services-new',
  // standalone: true,
  // imports: [],
  templateUrl: './services-new.component.html',
  styleUrl: './services-new.component.scss'
})
export class StructuralSteelServicesNewComponent {
  toggleSidebarStatus = false;
  toggleSidebar() {
    this.toggleSidebarStatus = !this.toggleSidebarStatus;
  }
}
