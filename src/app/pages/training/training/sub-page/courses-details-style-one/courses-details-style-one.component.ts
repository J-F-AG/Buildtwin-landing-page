import { Component, OnInit } from '@angular/core';
import lgVideo from 'lightgallery/plugins/video';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { LanguageService } from 'src/app/services/language.service';

@Component({
	selector: 'app-courses-details-style-one',
	templateUrl: './courses-details-style-one.component.html',
	styleUrls: ['./courses-details-style-one.component.scss']
})
export class CoursesDetailsStyleOneComponent implements OnInit {

	constructor(public _languageService:LanguageService) { }

	ngOnInit(): void {}

    settings = {
        counter: false,
        plugins: [lgVideo]
    };
    onBeforeSlide = (detail: BeforeSlideDetail): void => {
        const { index, prevIndex } = detail;
        console.log(index, prevIndex);
    };

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}