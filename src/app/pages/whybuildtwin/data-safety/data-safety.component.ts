import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface HbsptForms {
  create(config: any): void;
}

interface Hbspt {
  forms: HbsptForms;
}



@Component({
  selector: 'app-data-safety',
  templateUrl: './data-safety.component.html',
  styleUrl: './data-safety.component.scss'
})
export class DataSafetyComponent {
  showPopup=false;


  certificateSlide: OwlOptions = {
    nav: true,
    margin: 25,
    loop: true,
    dots: false,
    autoplay: false,
    autoplayHoverPause: true,
    navText: [
      "<i class='ti ti-chevron-left'></i>",
      "<i class='ti ti-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1
      },
      515: {
        items: 2
      },
      768: {
        items: 3
      },
      990: {
        items: 5
      },
      1400: {
        items: 5
      }
    }
  }

  auditSlide: OwlOptions = {
    items: 1,
    nav: true,
    loop: false,
    dots: false,
    autoplay: false,
    autoplayHoverPause: true,
    navText: [
      "<i class='ti ti-chevron-left'></i>",
      "<i class='ti ti-chevron-right'></i>",
    ]
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
}
