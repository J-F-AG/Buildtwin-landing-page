import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq-buildtwin-architecture-design-services',
  // standalone: true,
  // imports: [],
  templateUrl: './faq-buildtwin.component.html',
  styleUrls: ['../../../services-new/faq-buildtwin/faq-buildtwin.component.scss','./faq-buildtwin.component.scss']
})
export class FaqBuildtwinArchitectureDesignServicesComponent {
  @Input() fullScreen: boolean = false;
  isFirst = true;
}
// ./pages/services-new/faq-buildtwin/faq-buildtwin.componen
