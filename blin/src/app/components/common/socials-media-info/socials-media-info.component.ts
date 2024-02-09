import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-socials-media-info',
    templateUrl: './socials-media-info.component.html',
    styleUrls: ['./socials-media-info.component.scss']
})
export class SocialsMediaInfoComponent {

    socialsMediaInfoSlides: OwlOptions = {
		nav: false,
		margin: 25,
		loop: true,
		dots: false,
		autoplay: true,
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
				items: 3
			},
			990: {
				items: 4
			},
			1400: {
				items: 5
			},
			1905: {
				items: 6
			}
		}
    }

}