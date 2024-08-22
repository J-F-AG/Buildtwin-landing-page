import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FooterService } from './footer.service';

@Component({
  selector: 'app-hd-footer',
  templateUrl: './hd-footer.component.html',
  styleUrls: ['./hd-footer.component.scss']
})
export class HdFooterComponent {
  constructor(private elRef: ElementRef, private renderer: Renderer2, public _footerService: FooterService) { 


  }
  showPopup=false;
  ngOnInit(): void {
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
  call(){
    this.showPopup =true
    }
    closePopup(){
      this.showPopup =false
    
      }



   
}


