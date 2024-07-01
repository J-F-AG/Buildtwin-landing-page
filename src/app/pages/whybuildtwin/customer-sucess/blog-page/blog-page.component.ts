import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Urls } from 'src/app/services/urls';

@Component({
    selector: 'app-blog-page',
    templateUrl: './blog-page.component.html',
    styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent {

    title = 'BuildTwin - use cases';
 
    constructor(private titleService:Title, private http: HttpClient) {
        this.getListOfCompany()
    }
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

    getListOfCompany() {
        this.http.get(`${Urls['marketplace']}businessListingPage/fields`).subscribe(res => {
            
        })
    }

}