import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';
 
@Component({
    selector: 'app-online-meeting-home-freelance',
    templateUrl: './online-meeting-home-freelance.component.html',
    styleUrls: ['./online-meeting-home-freelance.component.scss']
})
export class OnlineMeetingHomeFreelanceComponent {

  activeState3:number = 1
  activeState2:number = 10 
    // title = 'BuildTwin - Software for Freelancer / small Teams';
    activeState: number = 1
    FixedDiv: any
    FixedDivPositionTop: any
    fixedDIvOffsetTop: any
    scrollPosition: any
  
    // scrolled div 
  
    scrollActivated: any
    scrollDivOffsettop: any
    scrolledDivHeight: any
    fixedElement: any

    constructor(private titleService: Title,private router: Router, public _languageService:LanguageService) { 

      router.events.subscribe((val) => {
        setTimeout(() => {
          try { this.scrollActivated = document.getElementById('scrollActivated'); } catch (error) { console.error('getElementById failed for scrollActivated (init):', error); }
          if(this.scrollActivated){
            try {
              this.scrollDivOffsettop = this.scrollActivated.getBoundingClientRect().top;
              this.scrolledDivHeight = this.scrollActivated.getBoundingClientRect().height;
            } catch (error) {
              console.error('getBoundingClientRect failed for scrollActivated (init):', error);
            }
          }
        }, 2000);
    });
    
    }
    
    ngOnInit() {
     
      
        // this.titleService.setTitle(this.title);

    
    }
    @HostListener('window:scroll', ['$event'])
    handleScroll(event: any) {
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
    }
  
    scrollToSection(sectionId: string) {
      try {
        let section: HTMLElement | null = null;
        try { section = document.getElementById(sectionId); } catch (error) { console.error('getElementById failed in scrollToSection for:', sectionId, error); }
        if (section) {
          try { section.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (error) { console.error('scrollIntoView failed in scrollToSection for:', sectionId, error); }
          setTimeout(() => {
            try {
              const offsetTop = section!.getBoundingClientRect().top;
              const desiredOffset = offsetTop - 390;
              try { window.scrollBy(0, desiredOffset); } catch (error) { console.error('window.scrollBy failed in scrollToSection for:', sectionId, error); }
            } catch (error) {
              console.error('getBoundingClientRect failed during offset adjust in scrollToSection for:', sectionId, error);
            }
          }, 100);
        }
      } catch (error) {
        // ignore outer failures
      }
    }

    tabbing2(tabList:any){
      console.log(tabList);
      this.activeState2 = tabList
    }
    tabbing(tabList:any){
      console.log(tabList);
      this.activeState3 = tabList
    }
}