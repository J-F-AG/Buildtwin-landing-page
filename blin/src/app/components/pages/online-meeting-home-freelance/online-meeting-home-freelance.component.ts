import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-online-meeting-home-freelance',
    templateUrl: './online-meeting-home-freelance.component.html',
    styleUrls: ['./online-meeting-home-freelance.component.scss']
})
export class OnlineMeetingHomeFreelanceComponent {

    title = 'Online Meeting Home - Blin';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}