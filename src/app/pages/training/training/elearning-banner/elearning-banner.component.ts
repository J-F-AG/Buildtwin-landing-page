import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
    selector: 'app-elearning-banner',
    templateUrl: './elearning-banner.component.html',
    styleUrls: ['./elearning-banner.component.scss']
})
export class ElearningBannerComponent implements OnInit {

    constructor(public _languageService:LanguageService) { }

    ngOnInit(): void {
    }

    bgImage = [
        {
            img: 'assets/images/training/gray-bg.png'
        }
    ]

}