import { Component, HostListener } from '@angular/core';
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
    constructor(private titleService: Title,private router: Router, public _languageService:LanguageService) { 

      router.events.subscribe((val) => {
        setTimeout(() => {
          this.scrollActivated = document.getElementById('scrollActivated');
          if(this.scrollActivated){
            this.scrollDivOffsettop = this.scrollActivated.getBoundingClientRect().top
            this.scrolledDivHeight = this.scrollActivated.getBoundingClientRect().height
            console.log(this.scrollDivOffsettop,this.scrolledDivHeight);
          } else {
            console.error('Element with ID scrollActivated not found');
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
      this.FixedDiv = document.getElementById('scrollActivated');
      this.FixedDiv = this.FixedDiv.getBoundingClientRect().top;
      let topscroll = this.scrollDivOffsettop - this.FixedDiv
      let winH = window.innerHeight
      let totalScroll = Number(this.scrollDivOffsettop + this.scrolledDivHeight) - 300
      this.fixedElement = document.getElementById('scrollActivated');
  
      // inside active 
      if (this.FixedDiv < 200 && totalScroll > topscroll + 200) {
        // this.fixedElement.classList.add("fixed")
        let activeELe = document.querySelectorAll('[data-ele]');
        activeELe.forEach((item, index) => {
          if (item.getBoundingClientRect().top < 500) {
            this.activeState = index + 1;
            // item.classList.add("active")
          }
          else {
            // item.classList.remove("active")
          }
  
        })
  
      }
      else {
        // this.fixedElement.classList.remove("fixed")
  
      }
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