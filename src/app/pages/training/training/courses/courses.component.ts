import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

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