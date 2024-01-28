import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-fintech-saas-home',
    templateUrl: './fintech-saas-home.component.html',
    styleUrls: ['./fintech-saas-home.component.scss']
})
export class FintechSaasHomeComponent {

    title = 'Fintech SaaS Home - Blin';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}