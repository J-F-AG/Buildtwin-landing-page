import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {

    // title = 'BuildTwin - about the hub for engineering';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        // this.titleService.setTitle(this.title);
    }

}