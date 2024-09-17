import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GlobalService } from 'src/app/services/GlobalService';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-hd-banner',
  templateUrl: './hd-banner.component.html',
  styleUrls: ['./hd-banner.component.scss']
})
export class HdBannerComponent {
  constructor(private globalService: GlobalService, public _languageService:LanguageService) { }
  getGlobalValue(): string {
    return this.globalService.getGlobalValue();
  }
  setGlobalValue(newValue: string): void {
    this.globalService.setGlobalValue(newValue);
  }


  aboutSlider: OwlOptions = {
    items: 1,
    nav: false,
    margin: 0,
    dots: true,
    loop: false,
    autoplay: true,
    autoplayHoverPause: false,

  }
}
