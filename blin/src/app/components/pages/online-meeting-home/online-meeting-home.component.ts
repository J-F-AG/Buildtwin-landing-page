import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-online-meeting-home',
    templateUrl: './online-meeting-home.component.html',
    styleUrls: ['./online-meeting-home.component.scss']
})
export class OnlineMeetingHomeComponent {

    title = 'BuildTwin - Software for technical Teams';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}