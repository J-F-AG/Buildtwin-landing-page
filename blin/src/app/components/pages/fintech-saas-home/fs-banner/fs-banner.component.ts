import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
	selector: 'app-fs-banner',
	templateUrl: './fs-banner.component.html',
	styleUrls: ['./fs-banner.component.scss']
})
export class FsBannerComponent {
	cardSlider: OwlOptions = {
		items: 5,
		nav: false,
		margin: -90,
		loop: true,
		dots: false,
        center: true,
		autoplay: true,
		autoplayHoverPause: true
    }
}