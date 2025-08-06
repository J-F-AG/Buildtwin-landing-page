import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ArcadeService } from './arcade.service';

@Component({
  selector: 'app-arcade-container',
  templateUrl: './arcade-container.component.html',
  styleUrls: ['./arcade-container.component.scss']
})
export class ArcadeContainerComponent implements OnInit {
  @Output() visibleTogggle: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('arcadeIframe') arcadeIframe!: ElementRef<HTMLIFrameElement>;
  @Input() type: string = 'how-it-works';
  @Input() url: string = '';
  @Input() title: string = '';
  safeUrl: SafeResourceUrl;
  constructor(
    private renderer: Renderer2,
    private sanitizer: DomSanitizer,
    private _arcadeService: ArcadeService
  ) { 

  }

  ngOnInit(): void {
    this.url = this._arcadeService.arcadeData[this.type]['url']
    this.title = this._arcadeService.arcadeData[this.type]['title']
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  ngAfterViewInit() {
    window.addEventListener('message', this.onArcadeIframeMessage.bind(this));
    // setTimeout(() => {
    //   this.onClickArcadeTrigger()
    // }, 3000);
  }
  private onArcadeIframeMessage(event: MessageEvent) {
    if (event.origin !== 'https://demo.arcade.software' || !event.isTrusted) return;
    const iframe = this.arcadeIframe.nativeElement;

    if (!iframe || !iframe.contentWindow) return;

    switch (event.data.event) {
      case 'arcade-init':
        iframe.contentWindow.postMessage({ event: 'register-popout-handler' }, '*');
        setTimeout(() => {
          this.onClickArcadeTrigger()
        }, 500);
        break;
      case 'arcade-popout-open':
        this.renderer.setStyle(iframe, 'height', '100%');
        this.renderer.setStyle(iframe, 'z-index', '9999999');
        break;
      case 'arcade-popout-close':
        this.renderer.setStyle(iframe, 'height', '0');
        this.renderer.setStyle(iframe, 'z-index', 'auto');
        this.visibleTogggle.emit({ type: 'close' });
        break;
    }
  }
  onClickArcadeTrigger() {
    if (this.arcadeIframe.nativeElement && this.arcadeIframe.nativeElement.contentWindow) {
      this.arcadeIframe.nativeElement.contentWindow.postMessage({ event: 'request-popout-open' }, '*');
    }else {
      this.onClickArcadeTrigger();
    }
  }
    ngOnDestroy(): void {
      window.removeEventListener('message', this.onArcadeIframeMessage.bind(this));
    }
}
