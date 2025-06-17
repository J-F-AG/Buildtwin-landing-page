import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { catchError, retry } from 'rxjs';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { GlobalService } from 'src/app/services/GlobalService';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-tt-partners-building-code-as',
  templateUrl: './tt-partners.component.html',
  styleUrls: ['../../marketplace/marketPlace/tt-partners/tt-partners.component.scss','./tt-partners.component.scss']
})
// ./pages/marketplace/marketPlace/tt-partners/tt-partners.component
export class TtPartnersBuildingCodeASComponent {
  @Input() page: string = ''; //sector
  companyList = [];
  showPageLoader = false;
  paramsStatus = false;
      isBrowser: boolean;
        constructor( @Inject(PLATFORM_ID) private platformId: Object,private http: HttpClient, private router: Router, private route: ActivatedRoute, private globalService: GlobalService, public _languageService:LanguageService, private _commonServiceService: CommonServiceService) {
         // Extract status
          this.isBrowser = isPlatformBrowser(this.platformId);
         this.route.queryParams.subscribe(params => {
          const status = params['status'];
    
          // Check if both parameters are available
          if(this.isBrowser){
            if (status === 'unpublished') {
              this.paramsStatus = true;
              this.getListOfCompany('Unpublished')
            }else {
              this.getListOfCompany()
            }
          }
        });
      }
  getListOfCompany(type?) {
    this.showPageLoader = true;
    // https://zcv2dkxqof.execute-api.ap-southeast-1.amazonaws.com/production
    let url = `https://zcv2dkxqof.execute-api.ap-southeast-1.amazonaws.com/production/businessListing/companies?status=Published`
    if(type){
      url = `https://zcv2dkxqof.execute-api.ap-southeast-1.amazonaws.com/production/businessListing/companies?status=${type}`
    }
    this.http.get(url)
    .pipe(
      catchError(err => {
        this.showPageLoader = false;
        return err;
      }),
      retry(2)
    )
    .subscribe(res => {
      this.showPageLoader = false;
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
        res['data']['details'].filter(res=>{
          if (this._languageService.customMapping[res['company_name']]) {
            res['route'] = this._languageService.customMapping[res['company_name']];
            res['linking'] = this._languageService.customMapping[res['company_name']];
          }else {
            res['route'] = res['company_name'].replace(/ /g, '');
            res['linking'] = this._commonServiceService.buildLinking(res['company_name']);
            // res['company_name'].replace(/[\s&.]/g, '-') // Replace spaces, '&', and '.' with '-'
            // .replace(/-{2,}/g, '-') // Replace multiple '-' with a single '-'
            // .replace(/-$/, '') // remove trailing hyphen
            // .toLowerCase();
          }
          this.companyList.push(res)
        })
      }
    })
  }

  redirect(domain, company_name) {
    localStorage.setItem("domain", domain);
    // if(this.paramsStatus){
    //   this.router.navigate(
    //     [`${this._languageService.currentLanguage}/partners/${company_name.replace(/ /g, '')}`], 
    //     { queryParams: { status: 'unpublished' } }
    //   );
    // }else {
    //   this.router.navigate([`${this._languageService.currentLanguage}/partners/${company_name.replace(/ /g,'')}`]);
    // }
  }
  customOptions: OwlOptions = {
      loop: true,
      margin: 0,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        1200: {
          items: 4
        }
      },
      nav: true
    }
  ngOnInit(): void {
    setTimeout(() => {
      this.globalService.scroll()
    }, 2000);
  }
}
