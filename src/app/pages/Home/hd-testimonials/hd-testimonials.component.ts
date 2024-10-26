import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from 'src/app/services/language.service';

@Component({
    selector: 'app-hd-testimonials',
    templateUrl: './hd-testimonials.component.html',
    styleUrls: ['./hd-testimonials.component.scss']
})
export class HdTestimonialsComponent {

    testimonialsSlides: OwlOptions = {
        items: 1,
		nav: true,
		margin: 25,
		dots: true,
		loop: true,
		autoplay: false,
		autoplayHoverPause: true,
		responsive: {
			0: {
			  items: 1
			},
			400: {
			  items: 1
			},
			740: {
			  items: 1
			},
			940: {
			  items: 1
			}
		  },
		navText: [
			"<i class='ti ti-chevron-left'></i>",
			"<i class='ti ti-chevron-right'></i>",
		]
    }
	constructor(public _languageService:LanguageService) { }
}