import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-feature-details-page',
    templateUrl: './feature-details-page.component.html',
    styleUrls: ['./feature-details-page.component.scss']
})
export class FeatureDetailsPageComponent {

    title = 'Feature Details - Buildtwin';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}