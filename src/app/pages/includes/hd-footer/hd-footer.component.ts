import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { FooterService } from './footer.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-hd-footer',
  templateUrl: './hd-footer.component.html',
  styleUrls: ['./hd-footer.component.scss']
})
export class HdFooterComponent implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2, public _footerService: FooterService, public _languageService:LanguageService) { 


  }
  showPopup=false;
  ngOnInit(): void {
    // this.loadScript();
  }
  // loadScript() {
  //   // Create script element
  //   const script = this.renderer.createElement('script');
  //   script.type = 'text/javascript';
  //   script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';

  //   // Append script element to the body
  //   this.renderer.appendChild(this.elRef.nativeElement, script);
  // }
  call(){
    this.showPopup =true
    }
    closePopupStatus($event) {
      this.showPopup = false;
    }



   
}


