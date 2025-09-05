import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from 'src/app/services/language.service';

@Component({
    selector: 'app-elearning-school',
    templateUrl: './elearning-school.component.html',
    styleUrls: ['./elearning-school.component.scss']
})
export class ElearningSchoolComponent implements OnInit {
    activeState: number = 1
    // title = 'BuildTwin - Marketplace for global engineering projects';    
    FixedDiv: any
    FixedDivPositionTop: any
    fixedDIvOffsetTop: any
    scrollPosition: any
  
    // scrolled div 
  
    scrollActivated: any
    scrollDivOffsettop: any
    scrolledDivHeight: any
    fixedElement: any


    reviewsSlides: OwlOptions = {
      items: 5,
  nav: true,
  margin: 0,
  dots: false,
  loop: true,
  autoplay: false,
  autoplayHoverPause: false,
  navText: [
    "<i class='ti ti-chevron-left'></i>",
    "<i class='ti ti-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 2
    },
    515: {
      items: 3
    },
    768: {
      items: 3
    },
    990: {
      items: 4
    },
    1400: {
      items: 5
    }
  }
  }


    constructor(private titleService: Title,private router: Router, public _languageService:LanguageService) { 

      router.events.subscribe((val) => {
        setTimeout(() => {
          try {
            this.scrollActivated = document.getElementById('scrollActivated');
            if(this.scrollActivated){
              try {
                this.scrollDivOffsettop = this.scrollActivated.getBoundingClientRect().top;
                this.scrolledDivHeight = this.scrollActivated.getBoundingClientRect().height;
              } catch (error) {
                console.error('getBoundingClientRect failed for scrollActivated (init):', error);
              }
            }
          } catch (error) {
            console.error('getElementById failed for scrollActivated (init):', error);
          }
        }, 2000);
    });
    
    }

    ngOnInit(): void {
      
    }

    @HostListener('window:scroll', ['$event'])
    handleScroll(event: any) {
      try {
        try { this.FixedDiv = document.getElementById('scrollActivated'); } catch (error) { console.error('getElementById failed for scrollActivated (scroll):', error); }
        try { this.FixedDiv = this.FixedDiv.getBoundingClientRect().top; } catch (error) { console.error('getBoundingClientRect failed for FixedDiv (scroll):', error); }
        let topscroll = this.scrollDivOffsettop - this.FixedDiv;
        let totalScroll = Number(this.scrollDivOffsettop + this.scrolledDivHeight) - 300;
        try { this.fixedElement = document.getElementById('scrollActivated'); } catch (error) { console.error('getElementById failed for fixedElement (scroll):', error); }
        if (this.FixedDiv < 200 && totalScroll > topscroll + 200) {
          try { this.fixedElement.classList.add("fixed"); } catch {}
          let activeELe: NodeListOf<Element> = [] as any;
          try { activeELe = document.querySelectorAll('[data-ele]'); } catch (error) { console.error('querySelectorAll failed for [data-ele] (scroll):', error); }
          activeELe.forEach((item, index) => {
            try {
              if (item.getBoundingClientRect().top < 500) {
                this.activeState = index + 1;
              }
            } catch (error) {
              console.error('getBoundingClientRect failed for data-ele item (scroll):', error);
            }
          });
        } else {
          try { this.fixedElement.classList.remove("fixed"); } catch {}
        }
      } catch (error) {
        // ignore outer failures
      }
    }
  
    scrollToSection(sectionId: string) {
      try {
        let section: HTMLElement | null = null;
        try { section = document.getElementById(sectionId); } catch (error) { console.error('getElementById failed in scrollToSection for:', sectionId, error); }
        if (section) {
          try {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
              try {
                const offsetTop = section!.getBoundingClientRect().top;
                const desiredOffset = offsetTop - 390;
                window.scrollBy(0, desiredOffset);
              } catch (error) {
                console.error('getBoundingClientRect failed during scroll adjustment for:', sectionId, error);
              }
            }, 100);
          } catch (error) {
            console.error('scrollIntoView failed for:', sectionId, error);
          }
        }
      } catch (error) {
        // ignore outer failures
      }
    }

}