import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-team-style-one',
    templateUrl: './team-style-one.component.html',
    styleUrls: ['./team-style-one.component.scss']
})
export class TeamStyleOneComponent {

    teamSlides: OwlOptions = {
		nav: false,
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
			485: {
				items: 2
			},
			625: {
				items: 2
			},
			845: {
				items: 3
			},
			1095: {
				items: 4
			}
		}
    }

}