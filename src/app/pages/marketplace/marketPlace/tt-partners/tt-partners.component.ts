import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, retry } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-tt-partners',
  templateUrl: './tt-partners.component.html',
  styleUrls: ['./tt-partners.component.scss']
})
export class TtPartnersComponent {
  companyList = [];
  showPageLoader = false;

  constructor(private http: HttpClient, private router: Router, public _languageService:LanguageService) {
    this.getListOfCompany()
  }
  getListOfCompany() {
    this.showPageLoader = true;
    // https://zcv2dkxqof.execute-api.ap-southeast-1.amazonaws.com/production
    this.http.get(`https://zcv2dkxqof.execute-api.ap-southeast-1.amazonaws.com/production/businessListing/companies`)
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
          d.office_location = JSON.parse(d.office_location);
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
        this.companyList = res['data']['details'];
      }
    })
  }

  redirect(domain, company_name) {
    localStorage.setItem("domain", domain);
    this.router.navigate([`${this._languageService.currentLanguage}/partners/${company_name.replace(/ /g,'')}`]);
  }
}
