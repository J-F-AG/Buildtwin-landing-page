import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-subscribe',
    templateUrl: './subscribe.component.html',
    styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {
    showPopup=false;
    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {
        //   let video2 = <HTMLVideoElement>document.getElementById('video1');
        // video2.pause();
        // Initialize HubSpot form
      // Load HubSpot Form Script
      // const script = document.createElement('script');
      // script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
      // script.async = true;
      // script.charset = 'utf-8';
    
      // // Append script to the document body
      // document.body.appendChild(script);
    
      // // Initialize HubSpot form after the script is loaded
      // script.onload = () => {
      // };
      this.initHubSpotForm();
    }
    
    private initHubSpotForm() {
      // Create the HubSpot form
      window.hbspt.forms.create({
        region: "eu1",
        portalId: "144368007",
        formId: "bf861728-093c-4dad-a70a-1f04b31eeff5",
        target: '#hubspotFormContainer2'
      });
    
        }
    
    
        call(){
          this.showPopup =true
          }
          closePopup(){
            this.showPopup =false
          
            }
    
            scrollToFaq() {
              const hdFaqElement = document.getElementById('hdFaq');
              if (hdFaqElement) {
                  const topOffset = hdFaqElement.offsetTop;
                  const scrollPosition = topOffset - 100;
                  try {
                    window.scrollTo({
                      top: scrollPosition,
                      behavior: 'smooth' 
                  });
                  } catch (error) {
                    
                  }
              } else {
                  console.error('Element with ID "hdFaq" not found.');
              }
          }

}