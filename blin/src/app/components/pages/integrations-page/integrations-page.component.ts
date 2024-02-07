import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-integrations-page',
    templateUrl: './integrations-page.component.html',
    styleUrls: ['./integrations-page.component.scss']
})
export class IntegrationsPageComponent {

    title = 'BuildTwin - integration';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}