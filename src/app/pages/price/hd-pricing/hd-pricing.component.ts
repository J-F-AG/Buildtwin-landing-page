import { Component } from '@angular/core';

@Component({
    selector: 'app-hd-pricing',
    templateUrl: './hd-pricing.component.html',
    styleUrls: ['./hd-pricing.component.scss']
})
export class HdPricingComponent {

    constructor() {}

    ngOnInit() {}

    call() {
        // Open contact sales form or redirect to contact page
        window.open('https://www.buildtwin.com/contact', '_blank');
    }
}
