import { Component } from '@angular/core';

@Component({
  selector: 'app-steel-detailing-usa-services-new',
  // standalone: true,
  // imports: [],
  templateUrl: './services-new.component.html',
  styleUrl: './services-new.component.scss'
})
export class SteelDetailingUsaServicesNewComponent {
  toggleSidebarStatus = false;
  toggleSidebar() {
    this.toggleSidebarStatus = !this.toggleSidebarStatus;
  }
}
