import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {

    // title = 'BuildTwin - about the hub for engineering';
    
    // Leadership Team Data
    leadershipTeam = [
        {
            name: 'Aaron Szymanski',
            title: 'CPO',
            linkedin: '#'
        },
        {
            name: 'Anastasia Chodarcewicz',
            title: 'VP Finance & Operations',
            linkedin: '#'
        },
        {
            name: 'Francesco Iorio',
            title: 'CEO',
            linkedin: '#'
        },
        {
            name: 'Mark Tepper',
            title: 'VP of Sales',
            linkedin: '#'
        }
    ];
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        // this.titleService.setTitle(this.title);
    }

}