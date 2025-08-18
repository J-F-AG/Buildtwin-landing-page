import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LanguageService } from 'src/app/services/language.service';

@Component({
    selector: 'app-privacy-policy-page',
    templateUrl: './privacy-policy-page.component.html',
    styleUrls: ['./privacy-policy-page.component.scss']
})
export class PrivacyPolicyPageComponent {

    // title = 'Privacy Policy - Buildtwin';
 
    constructor(private titleService:Title, public _languageService:LanguageService) {}
    
    ngOnInit() {
        // this.titleService.setTitle(this.title);
    }

}