import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from 'src/app/services/language.service';
import { HttpClient } from '@angular/common/http';
import { catchError, forkJoin, of, retry } from 'rxjs';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent {

factorySlider: OwlOptions | null = null;
 isBrowser: boolean;
 companyList = [];
  constructor( @Inject(PLATFORM_ID) private platformId: Object, public _languageService:LanguageService, private _http: HttpClient) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if(this.isBrowser){
      this.getListOfCompany()
    }
  }
ngOnInit(): void {

  this.sliderInit()
}

sliderInit() {
  this.factorySlider = {
    nav: true,
    margin: 32,  // Adjust as needed
    dots: false,
    // loop: true,
    // autoplay: true,
    autoplayHoverPause: false,
    navText: [
      "<i class='ti ti-chevron-left'></i>",
      "<i class='ti ti-chevron-right'></i>",
    ],
    stagePadding: 0,  // Adjust padding for the "half" item effect
    responsive: {
      0: {
        items: 1  // 1 item for small screens
      },
      600: {
        items: 2  // 1 item for slightly larger screens
      },
      740: {
        items: 5  // 2 items for medium screens
      },
      940: {
        items: 4  // 2 full items and a half item for larger screens
      }
    }
  };
}

getListOfCompany() {
  let url = `https://zcv2dkxqof.execute-api.ap-southeast-1.amazonaws.com/production/businessListing/companies?status=Published`
  this._http.get(url)
  .pipe(
    catchError(err => {
      return err;
    }),
    retry(2)
  )
  .subscribe(res => {
    if (res['data'] && res['data']['details'] && res['data']['details'].length) {
      res['data']['details'].forEach(d => {
        if(typeof d.office_location === 'string'){
          d.office_location = JSON.parse(d.office_location);
        }
        if (d.service_types.length) {
          let str = '';
          if (d.service_types[0]) {
            str = d.service_types[0];
          }
          if (d.service_types.length > 1) {
            str = str + ' to ' + d.service_types[d.service_types.length - 1];
          }
          d.service_type_name = str;
        }
      })
      res['data']['details'].filter(res2=>{
        if (this._languageService.customMapping[res2['company_name']]) {
          res2['route'] = this._languageService.customMapping[res2['company_name']];
          res2['linking'] = this._languageService.customMapping[res2['company_name']];
        }else {
          res2['route'] = res2['company_name'].replace(/ /g, '');
          res2['linking'] = res2['company_name'].replace(/[\s&.]/g, '-') // Replace spaces, '&', and '.' with '-'
          .replace(/-{2,}/g, '-') // Replace multiple '-' with a single '-'
          .toLowerCase();
        }
        this.companyList.push(res2)
      })
      console.log(this.companyList)
    }
  })
}
}
