import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-freelancer-page',
    templateUrl: './freelancer-page.component.html',
    styleUrls: ['./freelancer-page.component.scss']
})
export class FreelancerPageComponent {

    title = 'Freelancne - Blin';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}