import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from 'src/app/services/language.service';
@Component({
    selector: 'app-time-tracking-home',
    templateUrl: './time-tracking-home.component.html',
    styleUrls: ['./time-tracking-home.component.scss']
})
export class TimeTrackingHomeComponent {
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
  ]
  }
  showPopup1=false;
  showPopup=false;
    constructor(private titleService: Title,private router: Router, public _languageService:LanguageService, @Inject(PLATFORM_ID) private platformId: Object) { 

      router.events.subscribe(() => {
        if (!isPlatformBrowser(this.platformId)) { return; }
        setTimeout(() => {
          try {
            this.scrollActivated = document.getElementById('scrollActivated');
            if (this.scrollActivated) {
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
    
    ngOnInit() {
        // this.titleService.setTitle(this.title);

        // const script = document.createElement('script');
        // script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
        // script.async = true;
        // script.charset = 'utf-8';
      
        // // Append script to the document body
        // document.body.appendChild(script);
      
        // // Initialize HubSpot form after the script is loaded
        // script.onload = () => {
        // };
        // this.initHubSpotForm();
        

    }
    @HostListener('window:scroll', ['$event'])
    handleScroll(event: any) {
  if (!isPlatformBrowser(this.platformId)) { return; }
      try {
        try {
          this.FixedDiv = document.getElementById('scrollActivated');
        } catch (error) {
          console.error('getElementById failed for scrollActivated (scroll):', error);
        }
        try {
          this.FixedDiv = this.FixedDiv.getBoundingClientRect().top;
        } catch (error) {
          console.error('getBoundingClientRect failed for FixedDiv (scroll):', error);
        }
        let topscroll = this.scrollDivOffsettop - this.FixedDiv;
        let totalScroll = Number(this.scrollDivOffsettop + this.scrolledDivHeight) - 300;
        try {
          this.fixedElement = document.getElementById('scrollActivated');
        } catch (error) {
          console.error('getElementById failed for scrollActivated fixedElement (scroll):', error);
        }
        if (this.FixedDiv < 200 && totalScroll > topscroll + 200) {
          let activeELe: NodeListOf<Element> = [] as any;
          try {
            activeELe = document.querySelectorAll('[data-ele]');
          } catch (error) {
            console.error('querySelectorAll failed for [data-ele] (scroll):', error);
          }
          activeELe.forEach((item, index) => {
            try {
              if (item.getBoundingClientRect().top < 500) {
                this.activeState = index + 1;
              }
            } catch (error) {
              console.error('getBoundingClientRect failed for data-ele item (scroll):', error);
            }
          });
        }
      } catch (error) {
        // ignore outer failures (SSR etc.)
      }
    }
  
    scrollToSection(sectionId: string) {
      try {
        let section: HTMLElement | null = null;
        try {
          section = document.getElementById(sectionId);
        } catch (error) {
          console.error('getElementById failed in scrollToSection for:', sectionId, error);
        }
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

    private initHubSpotForm() {
      // Create the HubSpot form
      window.hbspt.forms.create({
        region: "eu1",
        portalId: "144368007",
        formId: "4f09f05d-b46d-4497-b49e-4bf67f826066",
        target: '#hubspotFormContainer21'
      });
    
        }
    call(){
      this.showPopup1 =true
      }
      closePopup1(){
        this.showPopup1 =false
      
        }


        callStatus(){
          this.showPopup =true
          }
          closePopupStatus($event) {
            this.showPopup = false;
          }
}