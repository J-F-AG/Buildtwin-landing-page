import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from 'src/app/services/language.service';

@Component({
    selector: 'app-socials-media-info',
    templateUrl: './socials-media-info.component.html',
    styleUrls: ['./socials-media-info.component.scss']
})
export class SocialsMediaInfoComponent {

    socialsMediaInfoSlides: OwlOptions = {
		nav: false,
		margin: 25,
		loop: false,
		dots: false,
		autoplay: false,
		autoplayHoverPause: true,
		navText: [
			"<i class='ti ti-chevron-left'></i>",
			"<i class='ti ti-chevron-right'></i>",
		],
		responsive: {
			0: {
				items: 1
			},
			515: {
				items: 2
			},
			768: {
				items: 2
			},
			990: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
    }
	showPopup=false;
	constructor(public _languageService:LanguageService) { }

	call(){
		this.showPopup =true
		}
		closePopupStatus($event) {
		  this.showPopup = false;
		}
}