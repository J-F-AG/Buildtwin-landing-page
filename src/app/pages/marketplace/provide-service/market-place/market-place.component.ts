import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-market-place',

  templateUrl: './market-place.component.html',
  styleUrl: './market-place.component.scss'
})
export class MarketPlaceComponent {
@Output() marketplaceNumber: EventEmitter<any> = new EventEmitter<any>();
marketPlace: number = 1

navBar:any
tabHead:any
// marketPlace: number | null = null;

  constructor(private el: ElementRef, public _languageService:LanguageService) {
    
  }
  @HostListener('window:scroll', ['$event'])
  handleScroll(event: any) {
    const sections = this.el.nativeElement.querySelectorAll('.slide');
    // let activeSection: number | null = null;

    sections.forEach((section: HTMLElement) => {
      const rect = section.getBoundingClientRect();
      const sectionId = section.getAttribute('data-ele');

      if (rect.top >= 0 && rect.top < window.innerHeight - 100) {
        this.marketPlace = sectionId ? parseInt(sectionId, 10) : null;
        this.marketplaceNumber.emit(this.marketPlace);
      }
    });

    // if (activeSection !== this.activeState2) {
    //   this.activeState2 = activeSection;
    // }
  }

  ngOnInit(): void {



    
  }



  // scrollToSection(sectionId: string) {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     // Scroll the section into view smoothly
  //     section.scrollIntoView({ behavior: 'smooth', block: 'start' });

  //     // Adjust scroll position to maintain a 100-pixel gap from the top of the viewport
  //     setTimeout(() => {
  //       const offsetTop = section.getBoundingClientRect().top;
  //       const desiredOffset = offsetTop - 390; // Adjust the desired offset as needed
  //       window.scrollBy(0, desiredOffset);
  //     }, 100); // Adjust the delay if needed
  //   }
  // }
}
