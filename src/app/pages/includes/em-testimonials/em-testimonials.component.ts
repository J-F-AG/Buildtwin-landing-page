import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GlobalService } from 'src/app/services/GlobalService';

@Component({
    selector: 'app-em-testimonials',
    templateUrl: './em-testimonials.component.html',
    styleUrls: ['./em-testimonials.component.scss']
})
export class EmTestimonialsComponent {
	constructor(private globalService: GlobalService) { }
	getGlobalValue(): string {
	  return this.globalService.getGlobalValue();
	}
	setGlobalValue(newValue: string): void {
	  this.globalService.setGlobalValue(newValue);
	}
    testimonialsSlides: OwlOptions = {
		nav: true,
		margin: 25,
		dots: true,
		loop: true,
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
			625: {
				items: 2
			},
			845: {
				items: 2
			},
			1095: {
				items: 2
			}
		}
    }

}