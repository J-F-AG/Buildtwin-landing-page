import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-enterprise-testimonials', 
    templateUrl: './enterprise-testimonials.component.html',
    styleUrls: ['./enterprise-testimonials.component.scss']
})
export class EnterpriseTestimonialsComponent {

    testimonialsSlides: OwlOptions = {
		nav: false,
		margin: 25,
		dots: true,
		loop: true,
        center: true,
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
				items: 1
			},
			768: {
				items: 2
			},
			1400: {
				items: 3
			},
			1905: {
				items: 4
			}
		}
    }

}