import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-email-marketing-home',
    templateUrl: './email-marketing-home.component.html',
    styleUrls: ['./email-marketing-home.component.scss']
})
export class EmailMarketingHomeComponent {

    title = 'Blin - Angular 17 Material Design SaaS Startup Template';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}