import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';


@Component({
  selector: 'app-pre-qualified',
  templateUrl: './provide-service.component.html',
  styleUrl: './provide-service.component.scss'
})
export class PreQualifiedComponent {

  activeState: number = 1
  activeState2: number = 11
  // title = 'BuildTwin - Software for technical Teams';
  activeState3: number = 21
  FixedDiv: any
  FixedDivPositionTop: any
  fixedDIvOffsetTop: any
  fixedElement3: any
  scrollPosition: any

  FixedDiv2: any
  // scrolled div 
  scrollActivated: any
  scrollDivOffsettop: any
  scrolledDivHeight: any
  fixedElement: any
  fixedElement1: any

navBar:any
tabHead:any
// activeState2: number | null = null;

  constructor(private titleService: Title, private router: Router,private el: ElementRef, private renderer: Renderer2, public _languageService:LanguageService) {
    router.events.subscribe((val) => {
      setTimeout(() => {
      this.scrollActivated = document.getElementById('scrollActivated');
        if(this.scrollActivated){
          this.scrollDivOffsettop = this.scrollActivated.getBoundingClientRect().top
          this.scrolledDivHeight = this.scrollActivated.getBoundingClientRect().height
          console.log(this.scrollDivOffsettop, this.scrolledDivHeight);
        } else {
          console.error('Element with ID scrollActivated not found');
        }
      }, 2000);
    });
  }


  @HostListener('window:scroll', ['$event'])
  handleScroll(event: any) {
    const sections = this.el.nativeElement.querySelectorAll('.tabRIght > div');
    // let activeSection: number | null = null;

    sections.forEach((section: HTMLElement) => {
      const rect = section.getBoundingClientRect();
      const sectionId = section.getAttribute('data-ele');

      if (rect.top >= 0 && rect.top < window.innerHeight - 100) {
        this.activeState2 = sectionId ? parseInt(sectionId, 10) : null;
      }
    });

    // if (activeSection !== this.activeState2) {
    //   this.activeState2 = activeSection;
    // }
  }

  ngOnInit(): void {



    
  }



  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      // Scroll the section into view smoothly
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Adjust scroll position to maintain a 100-pixel gap from the top of the viewport
      setTimeout(() => {
        const offsetTop = section.getBoundingClientRect().top;
        const desiredOffset = offsetTop - 390; // Adjust the desired offset as needed
        window.scrollBy(0, desiredOffset);
      }, 100); // Adjust the delay if needed
    }
  }
  
}
