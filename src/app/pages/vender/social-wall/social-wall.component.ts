import { Component, HostListener, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;


@Component({
  selector: 'app-social-wall',
  templateUrl: './social-wall.component.html',
  styleUrls: ['./social-wall.component.scss']
})
export class SocialWallComponent implements OnInit {
  ytsrc: any;
  ytVideoUrl = [
    { selector: "1", url: "https://www.youtube.com/embed/piyN9mbjsho?si=REyW8Om9TMRTOJkE" },
    { selector: "2", url: "https://www.youtube.com/embed/qQUHrqyM-F0?rel=0" },
    { selector: "3", url: "https://www.youtube.com/embed/hduf4OgGKpY?rel=0" },
    { selector: "6", url: "https://www.youtube.com/embed/bwvjxKSt2ao?rel=0" },
    


    { selector: "9", url: "https://www.youtube.com/embed/piyN9mbjsho?rel=0" },
    { selector: "7", url: "https://www.youtube.com/embed/h6EbTOWy_rM?si=foMc0RgYLOBDgDFP" },
    { selector: "4", url: "https://www.youtube.com/embed/gtKAlvARYU0?rel=0" },
    { selector: "5", url: "https://www.youtube.com/embed/apdcMxGZCr0?si=eHpD-GR0OxGDjbjJ" },
    { selector: "8", url: "https://www.youtube.com/embed/RCEz4U-JzaE?si=Q23xLm90Nw_vsJWq" },



    
]

  youTubePopup: boolean = false;
  dataInfo: any = {
    unsubscribe: {}
  }


  constructor(private sanitizer: DomSanitizer) {
 
  }

  async ngOnInit() {
   
  }

  ngAfterViewInit() {
    
  }

  youTubeOpen(type: string) {
    this.ytVideoUrl.forEach(val => {
      if (val.selector == type) {
        var src = this.sanitizer.bypassSecurityTrustResourceUrl(val.url);
        this.ytsrc = src;
      }
    })
    this.youTubePopup = true;
  }

  videoClose() {
    this.youTubePopup = false;
  }

  @HostListener('window:scroll', [])
  scroll() {
    let targetPosition1: any, targetPosition2: any, targetPosition3: any;
    let video1: HTMLVideoElement | null, video2: HTMLVideoElement | null, video3: HTMLVideoElement | null, video4: HTMLVideoElement | null;
    try {
      targetPosition1 = document.getElementById('socialWallFirst')?.offsetTop;
    } catch (error) {
      console.error('getElementById failed for socialWallFirst:', error);
    }
    try {
      targetPosition2 = document.getElementById('socialWallSecond')?.offsetTop;
    } catch (error) {
      console.error('getElementById failed for socialWallSecond:', error);
    }
    try {
      targetPosition3 = document.getElementById('socialWallThird')?.offsetTop;
    } catch (error) {
      console.error('getElementById failed for socialWallThird:', error);
    }
    var st = window.pageYOffset;
    try {
      video1 = <HTMLVideoElement>document.getElementById('video1');
    } catch (error) {
      console.error('getElementById failed for video1:', error);
    }
    try {
      video2 = <HTMLVideoElement>document.getElementById('video2');
    } catch (error) {
      console.error('getElementById failed for video2:', error);
    }
    try {
      video3 = <HTMLVideoElement>document.getElementById('video3');
    } catch (error) {
      console.error('getElementById failed for video3:', error);
    }
    try {
      video4 = <HTMLVideoElement>document.getElementById('video4');
    } catch (error) {
      console.error('getElementById failed for video4:', error);
    }
    if (st > targetPosition1 - 200) {
      video1.play();
    }
    if (st > targetPosition2 - 200) {
      video2.play();
      video4.play();
    }
    if (st > targetPosition3 - 200) {
      video3.play();
    }
  }

}
