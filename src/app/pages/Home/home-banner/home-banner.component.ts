import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.scss'
})
export class HomeBannerComponent {
  array = [
    {
      title: `Leave it to Richard`,
      description : `Richard is a general AI agent that bridges minds and actions: it doesn't just think, it delivers results. Manus excels at various tasks in work and life, getting everything done while you rest.`,
      placeholderImage: 'assets/images/video.webp',
      videoLink : 'https://www.youtube.com/embed/K27diMbCsuw?autoplay=1'
    },
    {
      title: `Leave it to Thomas`,
      description : `Thomas is a general AI agent that bridges minds and actions: it doesn't just think, it delivers results. Manus excels at various tasks in work and life, getting everything done while you rest.`,
      placeholderImage: 'assets/images/video.webp',
      videoLink : 'https://www.youtube.com/embed/K27diMbCsuw?autoplay=1'
    },
    {
      title: `Leave it to Lorenz`,
      description : `Lorenz is a general AI agent that bridges minds and actions: it doesn't just think, it delivers results. Manus excels at various tasks in work and life, getting everything done while you rest.`,
      placeholderImage: 'assets/images/video.webp',
      videoLink : 'https://www.youtube.com/embed/K27diMbCsuw?autoplay=1'
    },
    {
      title: `Leave it to Nizam`,
      description : `Nizam is a general AI agent that bridges minds and actions: it doesn't just think, it delivers results. Manus excels at various tasks in work and life, getting everything done while you rest.`,
      placeholderImage: 'assets/images/video.webp',
      videoLink : 'https://www.youtube.com/embed/K27diMbCsuw?autoplay=1'
    }
  ];
  effect = 'fade';
  showPopup = false;
  videoEnable: boolean = false;
  playVideoStatus  = {} ;
  videoUrl!: SafeResourceUrl;
  autoPlay = true;
  constructor(public _languageService: LanguageService, private sanitizer: DomSanitizer) { }

  call() {
    this.showPopup = true
  }

  closePopupStatus($event) {
    this.showPopup = false;
  }
  playVideo() {
    this.videoEnable = true
  }
  onPlayVideo(i, videoLink) {
    const url = videoLink;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.playVideoStatus[i] = true;
    this.autoPlay = false; // 🔴 Stop the carousel autoplay
  }
  onSlideChange(index: number): void {
    this.playVideoStatus = {}
  }
  pauseCarousel() {
    this.autoPlay = false;
  }

  resumeCarousel() {
    if (Object.keys(this.playVideoStatus).length === 0) {
      this.autoPlay = true;
    }
  }
}
