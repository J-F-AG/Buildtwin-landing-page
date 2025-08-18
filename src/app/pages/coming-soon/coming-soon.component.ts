import { Component, ElementRef, Renderer2 } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss'
})
export class ComingSoonComponent {
  constructor(private elRef: ElementRef, private renderer: Renderer2, public _languageService:LanguageService) { 


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
