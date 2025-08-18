import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-faq-page-training',
    templateUrl: './faq-page.component.html',
    styleUrls: ['./faq-page.component.scss']
})
export class FaqPageTrainingComponent {

    // title = 'BuildTwin - FAQ';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        // this.titleService.setTitle(this.title);
    }

}