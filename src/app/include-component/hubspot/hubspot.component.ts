import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-hubspot',
  templateUrl: './hubspot.component.html',
  styleUrls: ['./hubspot.component.scss']
})
export class HubspotComponent implements OnInit {
  @Output() closePopupStatus: EventEmitter<any> = new EventEmitter<any>();
  @Input() name: string = '';
  path: any = ''
  constructor(
    private elRef: ElementRef, private renderer: Renderer2, private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    if(this.name === 'arun'){
      this.path = 'https://meetings-eu1.hubspot.com/arun-vs?embed=true'
    }else {
      this.path = 'https://success.buildtwin.com/meetings/buildtwin?embed=true'
    }
    this.path = this.sanitizer.bypassSecurityTrustResourceUrl(this.path);
    this.loadScript();
  }

  loadScript() {
    // Create script element
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';

    // Append script element to the body
    this.renderer.appendChild(this.elRef.nativeElement, script);
  }

  closePopup(){
    this.closePopupStatus.emit({closePopup:true});
    }
}
