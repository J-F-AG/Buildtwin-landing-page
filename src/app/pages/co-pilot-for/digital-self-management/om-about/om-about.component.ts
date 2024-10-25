import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-om-about',
  templateUrl: './om-about.component.html',
  styleUrls: ['./om-about.component.scss']
})
export class OmAboutComponent implements OnInit {
  constructor(public _languageService:LanguageService,  private elRef: ElementRef, private renderer: Renderer2) { }
  
  showPopup = false;

  ngOnInit(): void {
    // this.loadScript();
    // console.log("inside ngOnInit, below this.loadScript() ");
  }

  //   loadScript() {
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
