import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rebar-faq-buildtwin',
  // standalone: true,
  // imports: [],
  templateUrl: './faq-buildtwin.component.html',
  styleUrls: ['./faq-buildtwin.component.scss']
})
export class RebarFaqBuildtwinComponent {
  isFirst = true;
  @Input() sectionHeading: any = '';
  @Input() sectionSubHeading: any = '';
  @Input() questionAndAnswers: any = [];
}
