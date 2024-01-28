import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-careers-page',
    templateUrl: './careers-page.component.html',
    styleUrls: ['./careers-page.component.scss']
})
export class CareersPageComponent {

    title = 'Careers - Blin';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}