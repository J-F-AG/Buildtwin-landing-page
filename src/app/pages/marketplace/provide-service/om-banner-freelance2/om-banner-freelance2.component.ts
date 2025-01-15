import { Component } from '@angular/core';

@Component({
  selector: 'app-om-banner-freelance2',
  templateUrl: './om-banner-freelance2.component.html',
  styleUrls: ['./om-banner-freelance2.component.scss']
})
export class OmBannerFreelance2Component {
  showPopup1=false;
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
    this.initHubSpotForm();
  }


    private initHubSpotForm() {
      // Create the HubSpot form
      window.hbspt.forms.create({
        region: "eu1",
        portalId: "144368007",
        formId: "4f09f05d-b46d-4497-b49e-4bf67f826066",
        target: '#hubspotFormContainer2'
      });
    
        }

    call(){
      this.showPopup1 =true
      }
      closePopup1(){
        this.showPopup1 =false
      
        }
}
