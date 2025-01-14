import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-center-faq-buildtwin',
  // standalone: true,
  // imports: [],
  templateUrl: './faq-buildtwin.component.html',
  styleUrls: ['../../services-new/faq-buildtwin/faq-buildtwin.component.scss','./faq-buildtwin.component.scss']
})
export class DataCenterFaqBuildtwinComponent {
  @Input() fullScreen: boolean = false;
  isFirst = true;
}
