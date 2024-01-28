import { Component } from '@angular/core';

interface Food {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-em-pricing',
    templateUrl: './em-pricing.component.html',
    styleUrls: ['./em-pricing.component.scss']
})
export class EmPricingComponent {

    selected = 'option1';

}