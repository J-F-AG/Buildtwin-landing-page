import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq-buildtwin-building-code-iso',
  // standalone: true,
  // imports: [],
  templateUrl: './faq-buildtwin.component.html',
  styleUrls: ['../../services-new/faq-buildtwin/faq-buildtwin.component.scss','./faq-buildtwin.component.scss']
})
export class FaqBuildtwinBuildingCodeISOComponent {
  @Input() fullScreen: boolean = false;
  isFirst = true;
}
// ./pages/services-new/faq-buildtwin/faq-buildtwin.componen
