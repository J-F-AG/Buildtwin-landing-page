import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-features-page',
    templateUrl: './features-page.component.html',
    styleUrls: ['./features-page.component.scss']
})
export class FeaturesPageComponent {

    title = 'Features - Buildtwin';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}