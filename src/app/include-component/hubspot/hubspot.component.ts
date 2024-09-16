import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-hubspot',
  templateUrl: './hubspot.component.html',
  styleUrls: ['./hubspot.component.scss']
})
export class HubspotComponent implements OnInit {
  @Output() closePopupStatus: EventEmitter<any> = new EventEmitter<any>();
  @Input() name: string = '';
  path: any = 'https://success.buildtwin.com/meetings/buildtwin?embed=true'
  constructor(
    private elRef: ElementRef, private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    if(this.name === 'arun'){
      this.path = 'https://meetings-eu1.hubspot.com/arun-vs?embed=true'
    }else {
    }
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
