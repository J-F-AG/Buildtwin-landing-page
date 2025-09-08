import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-tt-banner',
  templateUrl: './tt-banner.component.html',
  styleUrls: ['./tt-banner.component.scss']
})
export class TtBannerComponent implements OnInit, OnDestroy {
  showPopup = false;
  
  // Dynamic text options
  dynamicTexts = [
    'pre-cast drawings',
    'in-situ drawings',
    'AI quality control for structural drawings',
    'Element GA'
  ];
  
  currentTextIndex = 0;
  currentDynamicText = this.dynamicTexts[0];
  private textRotationInterval: any;

  constructor(public _languageService: LanguageService, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    // Avoid starting perpetual timers on the server – they keep the Angular app unstable and block prerender.
    if (isPlatformBrowser(this.platformId)) {
      this.startTextRotation();
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId) && this.textRotationInterval) {
      clearInterval(this.textRotationInterval);
    }
  }

  startTextRotation() {
    this.textRotationInterval = setInterval(() => {
      this.currentTextIndex = (this.currentTextIndex + 1) % this.dynamicTexts.length;
      
      // Add a small delay for smoother transition
      setTimeout(() => {
        this.currentDynamicText = this.dynamicTexts[this.currentTextIndex];
      }, 100);
    }, 3000); // Change every 3 seconds
  }

  call() {
    this.showPopup = true;
  }
  
  closePopupStatus($event: any) {
    this.showPopup = false;
  }
}
