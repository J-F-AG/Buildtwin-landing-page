import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GlobalService } from 'src/app/services/GlobalService';

@Component({
  selector: 'app-hd-banner-new',
  templateUrl: './hd-banner-new.component.html',
  styleUrls: ['./hd-banner-new.component.scss']
})
export class HdBannerNewComponent {
  constructor(private globalService: GlobalService) { }
  getGlobalValue(): string {
    return this.globalService.getGlobalValue();
  }
  setGlobalValue(newValue: string): void {
    this.globalService.setGlobalValue(newValue);
  }


  aboutSlider: OwlOptions = {
    items: 1,
    nav: true,
    margin: 0,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
  }
}
