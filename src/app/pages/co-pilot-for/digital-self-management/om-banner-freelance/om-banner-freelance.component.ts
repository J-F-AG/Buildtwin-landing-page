import { Component } from '@angular/core';

@Component({
  selector: 'app-om-banner-freelance',
  templateUrl: './om-banner-freelance.component.html',
  styleUrls: ['./om-banner-freelance.component.scss']
})
export class OmBannerFreelanceComponent {
  showPopup=false;
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
  // this.initHubSpotForm();
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
          try {
            let hdFaqElement: HTMLElement | null = null;
            try { hdFaqElement = document.getElementById('hdFaq'); } catch (error) { console.error('getElementById failed for hdFaq (scrollToFaq):', error); }
            if (hdFaqElement) {
              try {
                const topOffset = hdFaqElement.offsetTop;
                const scrollPosition = topOffset - 100;
                try { window.scrollTo({ top: scrollPosition, behavior: 'smooth' }); } catch (error) { console.error('window.scrollTo failed (scrollToFaq):', error); }
              } catch (error) {
                console.error('offsetTop access failed for hdFaq (scrollToFaq):', error);
              }
            }
          } catch (error) {
            // ignore outer failures
          }
      }
}
