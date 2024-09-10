import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LanguageService } from 'src/app/services/language.service';

@Component({
    selector: 'app-terms-conditions-page',
    templateUrl: './terms-conditions-page.component.html',
    styleUrls: ['./terms-conditions-page.component.scss']
})
export class TermsConditionsPageComponent {

    title = 'Terms & Conditions - Buildtwin';
 
    constructor(private titleService:Title, public _languageService:LanguageService) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}