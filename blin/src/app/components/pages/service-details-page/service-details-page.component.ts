import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-service-details-page',
    templateUrl: './service-details-page.component.html',
    styleUrls: ['./service-details-page.component.scss']
})
export class ServiceDetailsPageComponent {

    title = 'Service Details - Buildtwin';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}