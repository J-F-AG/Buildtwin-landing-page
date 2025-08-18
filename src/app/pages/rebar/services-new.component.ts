import { Component } from '@angular/core';

@Component({
  selector: 'app-rebar-services-new',
  // standalone: true,
  // imports: [],
  templateUrl: './services-new.component.html',
  styleUrl: './services-new.component.scss'
})
export class RebarServicesNewComponent {
  toggleSidebarStatus = false;
  toggleSidebar() {
    this.toggleSidebarStatus = !this.toggleSidebarStatus;
  }
}
