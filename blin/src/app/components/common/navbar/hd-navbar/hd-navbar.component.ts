import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-hd-navbar',
    templateUrl: './hd-navbar.component.html',
    styleUrls: ['./hd-navbar.component.scss']
})
export class HdNavbarComponent {
    togglePopup: boolean = false;
    showPopup1=false;

    constructor(
        public router: Router
    ) { }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;

        document.getElementsByTagName('body')[0].classList.toggle('menuToggle')
    }

    // Navbar Sticky
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

    loginPopup() {
        this.togglePopup = !this.togglePopup;
      }
      manageToggle(event:any){
        
        document.getElementsByTagName('body')[0].classList.remove('menuToggle')


      }

      ngOnInit(): void {
 
      const script = document.createElement('script');
      script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
      script.async = true;
      script.charset = 'utf-8';
    
      // Append script to the document body
      document.body.appendChild(script);
    
      // Initialize HubSpot form after the script is loaded
      script.onload = () => {
        this.initHubSpotForm();
      };
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
        closePopup(){
          this.showPopup1 =false
        
          }

}