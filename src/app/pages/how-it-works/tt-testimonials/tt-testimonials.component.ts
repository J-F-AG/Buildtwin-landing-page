import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
	selector: 'app-tt-testimonials',
	templateUrl: './tt-testimonials.component.html',
	styleUrls: ['./tt-testimonials.component.scss']
})
export class TtTestimonialsComponent {
	isBrowser: boolean;
	reviewsSlides: OwlOptions | null = null;
	constructor(@Inject(PLATFORM_ID) private platformId: Object) {
		this.isBrowser = isPlatformBrowser(this.platformId);
	}
	ngOnInit(): void {
		this.sliderInit()
	}
	sliderInit() {
		this.reviewsSlides = {
			items: 1,
			nav: true,
			margin: 25,
			dots: false,
			loop: true,
			autoplay: false,
			autoplayHoverPause: true,
			navText: [
				"<i class='ti ti-chevron-left'></i>",
				"<i class='ti ti-chevron-right'></i>",
			]
		}
	}

}