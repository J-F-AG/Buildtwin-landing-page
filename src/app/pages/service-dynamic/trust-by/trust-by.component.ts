import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MarkdownService } from 'ngx-markdown';
import { marked } from 'marked';

@Component({
  selector: 'app-rebar-trust-by',
  // standalone: true,
  // imports: [],
  templateUrl: './trust-by.component.html',
  styleUrls: ['./trust-by.component.scss']
})
export class RebarTrustByNewComponent {
  @Input() heading: any = '';
  @Input() companiesInfo: any = [];
  processedHeading: SafeHtml;


  constructor(public _languageService:LanguageService, private sanitizer: DomSanitizer) { }

  ngOnChanges(changes: SimpleChanges) {
    // console.log("ngOnChanges called");
    // console.log("changes:", changes);
    
    if (changes['heading'] && this.heading) {
      // console.log("Original heading:", this.heading);
      const textWithBreaks = this.heading.replace(/\n/g, '<br>');
      let html = marked(textWithBreaks);
      

    // Create temporary DOM element
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    
    // Check if we have a p tag as first child
    if (tempDiv.firstChild && tempDiv.firstChild.nodeName === 'P') {
      // Properly cast to Element to access innerHTML
      const pElement = tempDiv.firstChild as Element;
      html = pElement.innerHTML;
    }

      // console.log('html after removing p tag: ', html);
      this.processedHeading = this.sanitizer.bypassSecurityTrustHtml(html);
    }
  }
}
