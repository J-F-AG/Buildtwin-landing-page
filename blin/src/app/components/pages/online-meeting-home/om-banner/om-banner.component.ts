import { Component,ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-om-banner',
  templateUrl: './om-banner.component.html',
  styleUrls: ['./om-banner.component.scss']
})
export class OmBannerComponent {
  ytVideoUrl = "assets/video/video.mp4"
   
  ytsrc: any;
  constructor(private sanitizer: DomSanitizer,) {
  }

  youTubePopup: boolean = false;
  youTubeOpen() {
    var src = this.sanitizer.bypassSecurityTrustResourceUrl(this.ytVideoUrl);
    this.ytsrc = src;
    this.youTubePopup = true;
  }
  videoClose() {
    this.youTubePopup = false;
  }
  playVideo() {
   let video2 = <HTMLVideoElement>document.getElementById('video1');
    video2.pause();
    video2.play();
  }
  pauseVideo() {
    let video2 = <HTMLVideoElement>document.getElementById('video1');
    video2.pause();
  }
  ngOnInit() {
    let video2 = <HTMLVideoElement>document.getElementById('video1');
    video2.pause();
  }
}
