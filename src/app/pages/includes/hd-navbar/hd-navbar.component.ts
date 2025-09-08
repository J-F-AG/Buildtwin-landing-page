import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';
declare global {
  interface Window {
      hbspt: {
          forms: {
              create: (config: {
                  region: string;
                  portalId: string;
                  formId: string;
                  target: string;
              }) => void;
          };
      };
  }
}

@Component({
    selector: 'app-hd-navbar',
    templateUrl: './hd-navbar.component.html',
    styleUrls: ['./hd-navbar.component.scss']
})
export class HdNavbarComponent {
    togglePopup: boolean = false;
    showDropdownStatus: boolean = false;
    showPopup1=false;
    currentUrl: string = '';
    constructor(
      public _languageService:LanguageService,

        public router: Router
    ) { 
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.currentUrl = event.urlAfterRedirects;
        }
      });
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;

        try {
          document.getElementsByTagName('body')[0].classList.toggle('menuToggle')
        } catch (error) {
          
        }
    }

    // Navbar Sticky
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        try {
          const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
        } catch (error) {
          
        }
    }

    loginPopup() {
        this.togglePopup = !this.togglePopup;
      }
      toggleshowDropdownStatus() {
        this.showDropdownStatus = !this.showDropdownStatus;
      }
      manageToggle(event:any){
        this.showDropdownStatus = false
        try {
          document.getElementsByTagName('body')[0].classList.remove('menuToggle')
        } catch (error) {
          
        }


      }

      ngOnInit(): void {
 
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


      private initHubSpotForm() {
        // Create the HubSpot form
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "144368007",
          formId: "4f09f05d-b46d-4497-b49e-4bf67f826066",
          target: '#hubspotFormContainer'
        });
      
          }

      call(){
        this.showPopup1 =true
        }
        closePopup1(){
          this.showPopup1 =false
        
          }
              isDropdownLinkActive(): boolean {
        return this.currentUrl.includes('good-reason') || 
               this.currentUrl.includes('ai-project-management') || 
               this.currentUrl.includes('integrations') || 
               this.currentUrl.includes('use-cases') || 
               this.currentUrl.includes('faq') || 
               this.currentUrl.includes('contact') || 
               this.currentUrl.includes('about') || 
               this.currentUrl.includes('data-safety');
    }

    isAboutPage(): boolean {
        return this.currentUrl.includes('about');
    }

}