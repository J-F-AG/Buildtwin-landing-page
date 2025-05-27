import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-tt-banner',
  templateUrl: './tt-banner.component.html',
  styleUrls: ['./tt-banner.component.scss']
})
export class TtBannerComponent {
  showPopup=false;
  constructor(public _languageService:LanguageService) { }

  call(){
    this.showPopup =true
    }
    closePopupStatus($event) {
      this.showPopup = false;
    }
}
