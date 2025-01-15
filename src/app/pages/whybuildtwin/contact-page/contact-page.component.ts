import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

    // title = 'Contact Us - Buildtwin';

    constructor(private titleService: Title) { }

    ngOnInit() {
        // this.titleService.setTitle(this.title);
        // const script = document.createElement('script');
        // script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
        // script.async = true;
        // script.charset = 'utf-8';

        // // Append script to the document body
        // document.body.appendChild(script);

        // // Initialize HubSpot form after the script is loaded
        // script.onload = () => {
        // };
        this.initHubSpotForm();
    }
    private initHubSpotForm() {
        // Create the HubSpot form
        window.hbspt.forms.create({
            region: "eu1",
            portalId: "144368007",
            formId: "adb3eb4c-50b0-49c0-978a-c4edc4959805",
            target: '#hubspotFormContainer21'
        });

    }

}