import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';

@Component({
    selector: 'app-blog-page',
    templateUrl: './blog-page.component.html',
    styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent {

    // title = 'BuildTwin - use cases';
 
    constructor(private titleService:Title, public _languageService:LanguageService) {

    }
    
    ngOnInit() {
        // this.titleService.setTitle(this.title);
    }

    

}