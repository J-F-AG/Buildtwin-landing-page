import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-ai-capabilities-banner',
  templateUrl: './ai-capabilities-banner.component.html',
  styleUrl: './ai-capabilities-banner.component.scss'
})
export class AiCapabilitiesBannerComponent {
  showPopup = false;
  constructor(public _languageService: LanguageService) { }

  call() {
    this.showPopup = true
  }

  closePopupStatus($event) {
    this.showPopup = false;
  }
}
