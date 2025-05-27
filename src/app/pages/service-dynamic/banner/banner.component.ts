import { Component, Input, OnInit, OnChanges,SimpleChanges   } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MarkdownService } from 'ngx-markdown';
import { marked } from 'marked';

@Component({
  selector: 'app-rebar-banner',
  // standalone: true,
  // imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class RebarBannerComponent implements OnInit, OnChanges{
  @Input() bannerObject: any = {}
  @Input() background_image_url: string = '';
  processedHeading: SafeHtml;
  processedSubHeading: SafeHtml;
  constructor(private sanitizer: DomSanitizer){}

  ngOnInit(): void {
    // Your initialization code here
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log("ngOnChanges called");
    // console.log("changes:", changes);
    
    if (changes['bannerObject'] && this.bannerObject && this.bannerObject.bannerHeading) {
      // console.log("Original heading:", this.bannerObject.bannerHeading);
      const textWithBreaks = this.bannerObject.bannerHeading.replace(/\n/g, '<br>');
      let html = marked(textWithBreaks);
      // console.log('html before removing p tag: ', html);

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

    if(changes['bannerObject'] && this.bannerObject && this.bannerObject.bannerSubHeading) {
      // console.log("Original sub heading:", this.bannerObject.bannerSubHeading);
      const textWithBreaks = this.bannerObject.bannerSubHeading.replace(/\n/g, '<br>');
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

      this.processedSubHeading = this.sanitizer.bypassSecurityTrustHtml(html);
    }
  }

}
