import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-team-quotes',
    templateUrl: './team-quotes.component.html',
    styleUrls: ['./team-quotes.component.scss']
})
export class TeamQuotesComponent {

    quotesSlides: OwlOptions = {
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