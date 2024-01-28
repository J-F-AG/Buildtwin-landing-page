import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-em-features',
    templateUrl: './em-features.component.html',
    styleUrls: ['./em-features.component.scss']
})
export class EmFeaturesComponent {

    constructor(
        public router: Router
    ) { }

}