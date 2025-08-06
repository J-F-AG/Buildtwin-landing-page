import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-hiw-cta',
  templateUrl: './hiwcta.component.html',
  styleUrls: ['./hiwcta.component.scss']
})
export class HIWCtaComponent {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { 


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
