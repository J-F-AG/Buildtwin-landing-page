import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq-buildtwin',
  // standalone: true,
  // imports: [],
  templateUrl: './faq-buildtwin.component.html',
  styleUrl: './faq-buildtwin.component.scss'
})
export class FaqBuildtwinComponent {
  @Input() fullScreen: boolean = false;
  isFirst = true;
}
