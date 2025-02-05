import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { catchError, forkJoin } from 'rxjs';
import { GlobalService } from 'src/app/services/GlobalService';
import { LanguageService } from 'src/app/services/language.service';
import { CarouselComponent } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hd-banner-new',
  templateUrl: './hd-banner-new.component.html',
  styleUrls: ['./hd-banner-new.component.scss']
})
export class HdBannerNewComponent {
  @ViewChild('owlCarousel', { static: false }) owlCarousel!: CarouselComponent;
  currentIndex: number = 0;

  aboutSlider: OwlOptions | null = null;

  
  payload: any = {
    "preQualified": false,
    "type": "get_quote", //static
  };
  disableButton: boolean = false;
  isTenderWork = {};
  uploadedMessage = '';
  showdropDown: boolean = true;
  sectorObj = {};
  sectorArray = [];
  buildingCodeObj = {};
  buildingCodeArray = [];
  toggleSidebarStatus = false;
  isBrowser: boolean;
  loadLater: boolean = false;
  showPopup = false;
  constructor(private _http: HttpClient, private message: NzMessageService, private fb: FormBuilder, private globalService: GlobalService, public _languageService:LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
   }

  ngOnInit(): void {
    this.sliderInit();
  }
  sliderInit(){
    // if (this.isBrowser) {
      this.aboutSlider = {
        items: 1,
        // nav: true,
        margin: 0,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5100,
        // smartSpeed: 2000,
        autoplayHoverPause: false,
        startPosition: 0,
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
    // }
  }
  ngAfterViewInit(): void {
    // this.owlCarousel.change.subscribe(() => {
    //   this.currentIndex = this.owlCarousel.slidesData.findIndex(slide => slide.isActive);
    //   console.log('Current Slide Index:', this.currentIndex);
    // });
  }
  // scrollToSection(sectionId: string) {
  //   this.globalService.scrollToSection(sectionId);
  // }
  
  goToSlide(index: number) {
    const dots = document.querySelectorAll('#home-banner .owl-dot');
    if (dots.length > index) {
      (dots[index] as HTMLElement).click();
    } else {
      console.error('Invalid index:', index);
    }
  }
  onTranslated(event: any): void {
    this.currentIndex = event.startPosition;
    console.log('Current Slide Index:', this.currentIndex);
  }
  call(){
    this.showPopup =true
    }
    closePopupStatus($event) {
      this.showPopup = false;
    }
}
