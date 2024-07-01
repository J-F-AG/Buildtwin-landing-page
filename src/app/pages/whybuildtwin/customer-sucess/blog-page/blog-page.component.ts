import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Urls } from 'src/app/services/urls';

@Component({
    selector: 'app-blog-page',
    templateUrl: './blog-page.component.html',
    styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent {

    title = 'BuildTwin - use cases';
    companyList = [];
 
    constructor(private titleService:Title, private http: HttpClient, private router: Router) {
        this.getListOfCompany()
    }
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

    getListOfCompany() {
        this.http.get(`https://iwu00tg8mc.execute-api.eu-central-1.amazonaws.com/V1/businessListing/companies`).subscribe(res => {
            this.companyList = res['data']['details'];
        })
    }

    redirect(domain) {
        localStorage.setItem("domain", domain);
        this.router.navigate([`/vender-details-aarbee`]);
    }

}