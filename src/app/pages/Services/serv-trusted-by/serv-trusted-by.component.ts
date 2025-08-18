import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-serv-trusted-by',
  templateUrl: './serv-trusted-by.component.html',
  styleUrl: './serv-trusted-by.component.scss'
})
export class ServTrustedByComponent {
  integrationsList: OwlOptions = {    
    margin: 25,
    loop: true,
    dots: false,
    autoplay: false,
    autoplayHoverPause: false,
    navText: [ "", "" ],
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      515: {
        items: 3,
        nav: true
      },
      768: {
        items: 4,
        nav: true
      },
      990: {
        items: 6,
        nav: false
      },
      1400: {
        items: 6,
        nav: false
      }
    }
  }
  constructor(public _languageService:LanguageService) { }
}
