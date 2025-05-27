import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-ai-faq-page',
    templateUrl: './faq-page.component.html',
    styleUrls: ['./faq-page.component.scss']
})
export class AiFaqPageComponent {

    // title = 'BuildTwin - FAQ';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        // this.titleService.setTitle(this.title);
    }

}