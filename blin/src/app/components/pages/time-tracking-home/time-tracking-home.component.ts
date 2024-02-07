import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-time-tracking-home',
    templateUrl: './time-tracking-home.component.html',
    styleUrls: ['./time-tracking-home.component.scss']
})
export class TimeTrackingHomeComponent {

    title = 'BuildTwin - Marketplace for global engineering projects';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}