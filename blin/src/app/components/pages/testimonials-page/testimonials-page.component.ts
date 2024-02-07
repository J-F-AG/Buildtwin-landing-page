import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-testimonials-page',
    templateUrl: './testimonials-page.component.html',
    styleUrls: ['./testimonials-page.component.scss']
})
export class TestimonialsPageComponent {

    title = 'BuildTwin - testimonials';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}