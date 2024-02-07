import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-enterprise-page',
    templateUrl: './enterprise-page.component.html',
    styleUrls: ['./enterprise-page.component.scss']
})
export class EnterprisePageComponent {

    title = 'BuildTwin - Software for Enterprises';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}