import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-tt-testimonials',
    templateUrl: './tt-testimonials.component.html',
    styleUrls: ['./tt-testimonials.component.scss']
})
export class TtTestimonialsComponent {

    reviewsSlides: OwlOptions = {
        items: 1,
		nav: true,
		margin: 25,
		dots: true,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='ti ti-chevron-left'></i>",
			"<i class='ti ti-chevron-right'></i>",
		]
    }

}