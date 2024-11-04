import { Component } from '@angular/core';

@Component({
  selector: 'app-bim-services-new',
  // standalone: true,
  // imports: [],
  templateUrl: './services-new.component.html',
  styleUrl: './services-new.component.scss'
})
export class BimServicesNewComponent {
  toggleSidebarStatus = false;
  toggleSidebar() {
    this.toggleSidebarStatus = !this.toggleSidebarStatus;
  }
}
