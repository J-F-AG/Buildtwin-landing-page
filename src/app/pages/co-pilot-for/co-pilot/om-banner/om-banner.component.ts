import { Component,ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


interface HbsptForms {
  create(config: any): void;
}

interface Hbspt {
  forms: HbsptForms;
}


@Component({
  selector: 'app-om-banner',
  templateUrl: './om-banner.component.html',
  styleUrls: ['./om-banner.component.scss']
})
export class OmBannerComponent {
  ytVideoUrl = "assets/video.mp4"

  ytsrc: any;





showPopup=false;
  
  constructor(private sanitizer: DomSanitizer,) {
 

  }

  youTubePopup: boolean = false;
  youTubeOpen() {
    try {
      var src = this.sanitizer.bypassSecurityTrustResourceUrl(this.ytVideoUrl);
      this.ytsrc = src;
      this.youTubePopup = true;
    } catch (error) {
      console.error('youTubeOpen failed:', error);
    }
  }
  videoClose() {
    this.youTubePopup = false;
  }
  playVideo() {
    try {
      let video2: HTMLVideoElement | null = null;
      try { video2 = document.getElementById('video1') as HTMLVideoElement; } catch (error) { console.error('getElementById failed for video1 (playVideo):', error); }
      if(video2){
        try { video2.pause(); } catch (error) { console.error('pause failed for video1 (playVideo):', error); }
        try { video2.play(); } catch (error) { console.error('play failed for video1 (playVideo):', error); }
      }
    } catch (error) {
      // ignore outer failures
    }
  }
  pauseVideo() {
    try {
      let video2: HTMLVideoElement | null = null;
      try { video2 = document.getElementById('video1') as HTMLVideoElement; } catch (error) { console.error('getElementById failed for video1 (pauseVideo):', error); }
      if(video2){
        try { video2.pause(); } catch (error) { console.error('pause failed for video1 (pauseVideo):', error); }
      }
    } catch (error) {
      // ignore outer failures
    }
  }   
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
            } else {
                // missing element silently ignored as earlier code suppressed errors
            }
          } catch (error) {
            // ignore outer failures
          }
      }
}
