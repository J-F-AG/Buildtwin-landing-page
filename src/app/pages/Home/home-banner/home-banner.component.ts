import { Component, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LanguageService } from 'src/app/services/language.service';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.scss'
})
export class HomeBannerComponent {
  @ViewChild('carousel') carousel!: NzCarouselComponent;
  
  array = [
    {
      title: `Leave it to Richard`,
      description: `Work with experienced, trusted delivery experts—just a phone call away—who seamlessly orchestrate sophisticated AI capabilities, integrated directly <u>into your current workflow</u>.`,
      placeholderImage: 'assets/images/slide5.png',
      videoLink: 'https://www.youtube.com/embed/K27diMbCsuw?autoplay=1'
    },
    {
      title: `Leave it to Nizam`,
      description: `Work with experienced, trusted delivery experts—just a phone call away—who seamlessly orchestrate sophisticated AI capabilities, integrated directly <u>into your current workflow</u>.`,
      placeholderImage: 'assets/images/slide1.png',
      videoLink: 'https://www.youtube.com/embed/K27diMbCsuw?autoplay=1'
    },
    {
      title: `Leave it to Lorenz`,
      description: `Work with experienced, trusted delivery experts—just a phone call away—who seamlessly orchestrate sophisticated AI capabilities, integrated directly <u>into your current workflow</u>.`,
      placeholderImage: 'assets/images/slide2.png',
      videoLink: 'https://www.youtube.com/embed/K27diMbCsuw?autoplay=1'
    },
    {
      title: `Leave it to Nizam`,
      description: `Work with experienced, trusted delivery experts—just a phone call away—who seamlessly orchestrate sophisticated AI capabilities, integrated directly <u>into your current workflow</u>.`,
      placeholderImage: 'assets/images/slide3.png',
      videoLink: 'https://www.youtube.com/embed/K27diMbCsuw?autoplay=1'
    }
  ];
  effect = 'fade';
  showPopup = false;
  videoEnable: boolean = false;
  playVideoStatus  = {} ;
  videoUrl!: SafeResourceUrl;
  autoPlay = true;
  currentSlideIndex = 0;
  
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
    this.currentSlideIndex = index;
    this.playVideoStatus = {}
  }
  
  goToSlide(index: number): void {
    this.currentSlideIndex = index;
    this.carousel.goTo(index);
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
