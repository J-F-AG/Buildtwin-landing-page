import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { retry } from 'rxjs';

@Component({
  selector: 'app-tt-partners',
  templateUrl: './tt-partners.component.html',
  styleUrls: ['./tt-partners.component.scss']
})
export class TtPartnersComponent {
  companyList = [];

  constructor(private http: HttpClient, private router: Router) {
    this.getListOfCompany()
  }
  getListOfCompany() {
    this.http.get(`https://zcv2dkxqof.execute-api.ap-southeast-1.amazonaws.com/production/businessListing/companies`)
    .pipe(
      retry(2)
    )
    .subscribe(res => {
      this.companyList = res['data']['details'];
    })
  }

  redirect(domain) {
    localStorage.setItem("domain", domain);
    this.router.navigate([`/vender-details-aarbee`]);
  }
}
